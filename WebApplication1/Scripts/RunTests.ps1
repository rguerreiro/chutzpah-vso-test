Set-ExecutionPolicy unrestricted -Scope CurrentUser -Force

dnvm setup

dnvm use 1.0.0-rc1-update1

dnx -p $PSScriptRoot\..\test\ClassLibrary1 test-vso