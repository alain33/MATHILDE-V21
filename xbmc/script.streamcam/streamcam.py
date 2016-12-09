#!/usr/bin/python
##########IMPORT DES LIBRAIRIES
import xbmc, xbmcgui, time, urllib2, sys, os, xbmcaddon, xbmcvfs
#urllib.getproxies = lambda x = None: {}


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

# Get settings
interval  = int(float(__addon__.getSetting('interval')))
autoClose = (__addon__.getSetting('autoClose') == 'true')
duration  = int(float(__addon__.getSetting('duration')) * 1000)


# Utilitaire log
def log(message,loglevel=xbmc.LOGNOTICE):
    xbmc.log((ADD_ON_ID + ": " + message).encode('UTF-8','replace'),level=loglevel)

# import deq arguments
count = len(sys.argv) - 1
## Url Cam
url="%s" % (sys.argv[1])
## Num fenetre
position = 1
if (count>=2):
   if sys.argv[2].isdigit():
      position= int(sys.argv[2])
   else:
      position = 1
if (position<1) or (position>7):
      position = 1
if (count>=3) :
   if sys.argv[3].isdigit():
      interval=int(sys.argv[3])
if (count>=4) :
   log('--------------------- ' + str(sys.argv[4]) + ' -----------------  \n', xbmc.LOGDEBUG)
   if (sys.argv[4] == 'true'):
      log('--------------------- TRUE -----------------  \n', xbmc.LOGDEBUG)
      autoClose = ('true' == 'true')
   if (sys.argv[4] == 'false'):
      log('--------------------- FALSE -----------------  \n', xbmc.LOGDEBUG)
      autoClose = ('true' == 'false')
if (count>=5) :
   if sys.argv[5].isdigit():
      duration=int(sys.argv[5])
   #log('*************: [' + str(sys.argv[3]) + ']\n', xbmc.LOGDEBUG)


# Parametrage des fenetres 
if (position==1):
   width     = int(float(__addon__.getSetting('w1_width')))
   height    = int(float(__addon__.getSetting('w1_height')))
   x = int(float(__addon__.getSetting('w1_x')))
   y = int(float(__addon__.getSetting('w1_y')))
   __snapshot_dir__ = xbmc.translatePath(os.path.join(__resource__, 'media', 'snapshots01').encode("utf-8")).decode("utf-8")

if (position==2):
   width     = int(float(__addon__.getSetting('w2_width')))
   height    = int(float(__addon__.getSetting('w2_height')))
   x = int(float(__addon__.getSetting('w2_x')))
   y = int(float(__addon__.getSetting('w2_y')))
   __snapshot_dir__ = xbmc.translatePath(os.path.join(__resource__, 'media', 'snapshots02').encode("utf-8")).decode("utf-8")

if (position==3):
   width     = int(float(__addon__.getSetting('w3_width')))
   height    = int(float(__addon__.getSetting('w3_height')))
   x = int(float(__addon__.getSetting('w3_x')))
   y = int(float(__addon__.getSetting('w3_y')))
   __snapshot_dir__ = xbmc.translatePath(os.path.join(__resource__, 'media', 'snapshots03').encode("utf-8")).decode("utf-8")

if (position==4):
   width     = int(float(__addon__.getSetting('w4_width')))
   height    = int(float(__addon__.getSetting('w4_height')))
   x = int(float(__addon__.getSetting('w4_x')))
   y = int(float(__addon__.getSetting('w4_y')))
   __snapshot_dir__ = xbmc.translatePath(os.path.join(__resource__, 'media', 'snapshots04').encode("utf-8")).decode("utf-8")

if (position==5):
   width     = int(float(__addon__.getSetting('w5_width')))
   height    = int(float(__addon__.getSetting('w5_height')))
   x = int(float(__addon__.getSetting('w5_x')))
   y = int(float(__addon__.getSetting('w5_y')))
   __snapshot_dir__ = xbmc.translatePath(os.path.join(__resource__, 'media', 'snapshots05').encode("utf-8")).decode("utf-8")

if (position==6):
   width     = int(float(__addon__.getSetting('w6_width')))
   height    = int(float(__addon__.getSetting('w6_height')))
   x = int(float(__addon__.getSetting('w6_x')))
   y = int(float(__addon__.getSetting('w6_y')))
   __snapshot_dir__ = xbmc.translatePath(os.path.join(__resource__, 'media', 'snapshots06').encode("utf-8")).decode("utf-8")

if (position==7):
   width     = int(float(__addon__.getSetting('w7_width')))
   height    = int(float(__addon__.getSetting('w7_height')))
   x = int(float(__addon__.getSetting('w7_x')))
   y = int(float(__addon__.getSetting('w7_y')))
   __snapshot_dir__ = xbmc.translatePath(os.path.join(__resource__, 'media', 'snapshots07').encode("utf-8")).decode("utf-8")


# Classes
class CamPreviewDialog(xbmcgui.WindowDialog):
    def __init__(self):
        log('CamPreviewDialog Initialized \n', xbmc.LOGDEBUG)
        self.image = xbmcgui.ControlImage(x,y, width, height, __icon__)
        self.addControl(self.image)
        
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
log('Windows: [' + str(position) + ']\n', xbmc.LOGDEBUG)
log('Width: [' + str(width) + ']\n', xbmc.LOGDEBUG)
log('Height: [' + str(height) + ']\n', xbmc.LOGDEBUG)
log('Left: [' + str(x) + ']\n', xbmc.LOGDEBUG)
log('Top: [' + str(y) + ']\n', xbmc.LOGDEBUG)
log('Original URL: [' + url + ']\n', xbmc.LOGDEBUG)

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

