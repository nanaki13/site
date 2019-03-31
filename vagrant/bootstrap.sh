#!/usr/bin/env bash

apt-get update
apt-get install -y apache2
apt-get install -y php7.0
apt-get install -y php7.0-sqlite3
if ! [ -L /var/www/julia ]; then
  mkdir -p /var/www/
  rm -rf /var/www/julia
  ln -fs /vm_share/site/julia /var/www/julia
fi
cp /vm_share/julia.conf /etc/apache2/sites-available/julia.conf
a2dissite 000-default
a2enmod rewrite
a2enmod headers 
a2ensite julia.conf

# a2enmod php5
service apache2 restart


