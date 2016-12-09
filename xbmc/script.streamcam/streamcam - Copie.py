#!/usr/bin/python
##########IMPORT DES LIBRAIRIES
import xbmc, xbmcgui, time, urllib, sys, os
urllib.getproxies = lambda x = None: {}

########## IMPORT DES PARAMETRES
count = len(sys.argv) - 1
## Url Cam
url="%s" % (sys.argv[1])
## Num fenetre
position = 1
if (count>1) and (count<4):
   if sys.argv[2].isdigit():
      position= int(sys.argv[2])
   else:
      position = 1
if (position<1) or (position>7):
      position = 1

# Dossier pour les images
tempdir=xbmc.translatePath('special://home')
#tempdir=xbmc.translatePath('special://temp')
#tempdir="D:\\"

# Import the modules
import os, time, urllib2, xbmc, xbmcaddon, xbmcgui, xbmcvfs

# Constants
ACTION_PREVIOUS_MENU = 10
ACTION_BACKSPACE = 110
ACTION_NAV_BACK = 92
ADD_ON_ID = 'script.streamcam'

# Set plugin variables
__addon__    = xbmcaddon.Addon()
__cwd__      = __addon__.getAddonInfo('path').decode("utf-8")
__icon__     = xbmc.translatePath(os.path.join(__cwd__, 'icon.png').encode("utf-8")).decode("utf-8")
__resource__ = xbmc.translatePath(os.path.join(__cwd__, 'resources').encode("utf-8")).decode("utf-8")

########## Parametrage des fenetres AVEC COORDONNEES ET TAILLE EN PIXEL
# resolution viewer xbmc: 1280*720
if (position==1):
   x=0
   y=480
   width=320
   height=240
   #tempjpg= "%simg1.jpg" % (tempdir)
   tempjpg= "img1.jpg"
   __snapshot_dir__ = xbmc.translatePath(os.path.join(__resource__, 'media', 'snapshots01').encode("utf-8")).decode("utf-8")

if (position==2):
   x=320
   y=480
   width=320
   height=240
   tempjpg= "img2.jpg"
   __snapshot_dir__ = xbmc.translatePath(os.path.join(__resource__, 'media', 'snapshots02').encode("utf-8")).decode("utf-8")

if (position==3):
   x=640
   y=480
   width=320
   height=240
   tempjpg= "img3.jpg"

if (position==4):
   x=960
   y=480
   width=320
   height=240
   tempjpg= "img4.jpg"

if (position==5):
   x=0
   y=240
   width=640
   height=480
   tempjpg= "img5.jpg"

if (position==6):
   x=640
   y=240
   width=640
   height=480
   tempjpg= "img6.jpg"

if (position==7):
   x=0
   y=0
   width=1280
   height=720
   tempjpg= "%simg7.jpg" % (tempdir)




# Get settings
#url       = __addon__.getSetting('url')
#username  = __addon__.getSetting('username')
#password  = __addon__.getSetting('password')
#width     = int(float(__addon__.getSetting('width')))
#height    = int(float(__addon__.getSetting('height')))
#interval  = int(float(__addon__.getSetting('interval')))
interval=100
#autoClose = (__addon__.getSetting('autoClose') == 'true')
autoClose = "true"
#duration  = int(float(__addon__.getSetting('duration')) * 1000)
duration = 10000

# Utils

def log(message,loglevel=xbmc.LOGNOTICE):
    xbmc.log((ADD_ON_ID + ": " + message).encode('UTF-8','replace'),level=loglevel)

# Classes
class CamPreviewDialog(xbmcgui.WindowDialog):
    def __init__(self):
        log('CamPreviewDialog Initialized \n', xbmc.LOGDEBUG)
        COORD_GRID_WIDTH = 1280
        COORD_GRID_HEIGHT = 720
        scaledWidth = int(float(COORD_GRID_WIDTH) / self.getWidth() * width)
        scaledHeight = int(float(COORD_GRID_HEIGHT) / self.getHeight() * height)
        self.image = xbmcgui.ControlImage(COORD_GRID_WIDTH - scaledWidth, COORD_GRID_HEIGHT - scaledHeight, scaledWidth, scaledHeight, __icon__)
        self.addControl(self.image)
        self.image.setAnimations([('WindowOpen', 'effect=slide start=%d time=1000 tween=cubic easing=in'%(scaledWidth),), ('WindowClose', 'effect=slide end=%d time=1000 tween=cubic easing=in'%(scaledWidth),)])

    def start(self, autoClose, duration, interval, url, destination):
        log('CamPreviewDialog Started \n', xbmc.LOGDEBUG)
        self.isRunning = bool(1)
        snapshot = ''
        startTime = time.time()
        while(not autoClose or (time.time() - startTime) * 1000 <= duration):
            if xbmcvfs.exists(snapshot):
                os.remove(snapshot)

            snapshot = self.downloadSnapshot(url, destination)

            if snapshot != '':
                self.update(snapshot)

            xbmc.sleep(interval)
            if not self.isRunning:
                break
        self.close()

    def downloadSnapshot(self, url, destination):
        log('Retreiving Image \n', xbmc.LOGDEBUG)
        try:
            imgData = urllib2.urlopen(url).read()
            #filename = snapshot = xbmc.translatePath( os.path.join( destination, 'snapshot' + str(time.time()) + '.jpg' ).encode("utf-8") ).decode("utf-8")
            filename = snapshot = xbmc.translatePath( os.path.join( destination, 'snapshot' + str(time.time()) + '.jpg' ).encode("utf-8") ).decode("utf-8")
            output = open(filename,'wb')
            output.write(imgData)
            output.close()
            return filename
        except:
            return ''

    def onAction(self, action):
        log('Received Action: ' + str(action.getId()) + '\n', xbmc.LOGDEBUG)
        if action in (ACTION_PREVIOUS_MENU, ACTION_BACKSPACE, ACTION_NAV_BACK):
            self.isRunning = bool(0)
            self.close()

    def update(self, image):
        log('Updating Image \n', xbmc.LOGDEBUG)
        self.image.setImage(image)
    
# Main execution

log('AutoClose: [' + str(autoClose) + ']\n', xbmc.LOGDEBUG)
log('Duration: [' + str(duration) + ']\n', xbmc.LOGDEBUG)
log('Interval: [' + str(interval) + ']\n', xbmc.LOGDEBUG)
log('Width: [' + str(width) + ']\n', xbmc.LOGDEBUG)
log('Height: [' + str(height) + ']\n', xbmc.LOGDEBUG)
log('Original URL: [' + url + ']\n', xbmc.LOGDEBUG)

# Add Basic Authentication Headers
#if (username is not None and username != ''):
#    passwordManager = urllib2.HTTPPasswordMgrWithDefaultRealm()
#    passwordManager.add_password(None, url, username, password)
#    authhandler = urllib2.HTTPBasicAuthHandler(passwordManager)
#    opener = urllib2.build_opener(authhandler)
#    urllib2.install_opener(opener)

# Replace URL agruments
argCount = len(sys.argv)
for i in xrange(1, argCount):
    search = '{%d}'%(i - 1)
    replace = sys.argv[i]
    url.replace(search, replace)

log('Final URL: [' + url + ']\n', xbmc.LOGDEBUG)

xbmcvfs.mkdir(__snapshot_dir__)

camPreview = CamPreviewDialog()
camPreview.show()
camPreview.start(autoClose, duration, interval, url, __snapshot_dir__)
del camPreview

dirs, files = xbmcvfs.listdir(__snapshot_dir__)
for file in files:
    log('Delete remaining snapshot: [' + file + ']\n', xbmc.LOGDEBUG)
    xbmcvfs.delete(os.path.join(__snapshot_dir__, file))

