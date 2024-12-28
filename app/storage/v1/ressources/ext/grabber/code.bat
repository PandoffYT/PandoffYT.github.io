@REM Write stuff before the :error, because error is used as a last resort for the application to tell the user something's wrong !
@echo off & cls & title Batch Grabber - Main

@REM Verifies if it has already been launched
if exist "%appdata%/grabber" (  goto initiation ) else (    md %appdata%/grabber & goto initiation  )

:initiation
set errcode=NULL
set "utdir=%temp%/null"
set "defaultextractdir=%appdata%/grabber"

:rights_check
net session >nul 2>&1
    if %errorLevel% == 0 (
        cls
        echo Success: Administrative permissions confirmed.
        goto loader
    ) else (
        cls
        echo Please restart this program as an admin !
        echo.
        echo Press any key to continue. . .
        pause > %utdir%
        exit
    )

@REM Only one way to access this, by the :initiation line, times out 1 second to make sure everything is alright and loaded
:loader
@REM add loader here
timeout /nobreak 1
goto menu



:menu
pause


:error
@REM If anything goes wrong, redirects here
title Error (code : %errcode%)
echo An error occured and the program may exit, all unsaved configs will be deleted (as the autosave settings tells, comming feature)
echo.
echo Press any key to continue. . .
pause > %utdir%
@REM Remember to set if variables to know if the error is critic, if it is, exit the program, if it isnt, continue

