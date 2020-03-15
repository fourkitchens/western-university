#!/bin/bash

composer install
yarn import-data
yarn confim
cd web/themes/custom/western-up
yarn
yarn build
cd ../../../..
lando drush uli
