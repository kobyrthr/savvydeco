#!/bin/bash

# # echo removed app.zip file ....
rm -f cdk-savvy/app.zip

# # Create a zip file of the current working directory

zip -r app.zip .

# move app.zip to cdk-savvy

mv app.zip cdk-savvy/

# enter cdk-savvy folder

cd ./cdk-savvy

# synth proj

cdk synth

# echo cdk deploy project ...

cdk deploy

# echo run test to verify deployment success ...

echo Done! 

