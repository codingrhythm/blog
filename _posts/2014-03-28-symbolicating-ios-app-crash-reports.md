---
layout: post
title:  "Symbolicating iOS App Crash Reports"
date:   2014-3-28 9:27:00
categories: tips
---

Steps to analyze crash report from apple:

1. Copy the release .app file which was pushed to the appstore, the .dSYM file that was created at the time of release and the crash report receive from APPLE into a FOLDER.

2. OPEN terminal application and go to the folder created above (using CD command)

3. xcrun atos -arch armv7 -o YOURAPP.app/YOURAPP MEMORY_LOCATION_OF_CRASH. The memory location should be the one at which the app crashed as per the report.

```Ex: xcrun atos -arch armv7 -o 'app name.app'/'app name' 0x0003b508```

This would show you the exact line, method name which resulted in crash.

```Ex: [classname functionName:]; -510```

Symbolicating IPA

if we use IPA for symbolicating - just rename the extention .ipa with .zip , extract it then we can get a Payload Folder which contain app. In this case we don't need .dSYM file.

Note

This can only work if the app binary does not have symbols stripped. By default release builds stripped the symbols. We can change it in project build settings "Strip Debug Symbols During Copy" to NO.