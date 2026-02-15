#!/bin/bash
cd ../database
sqlite3 ./orderKiosk.db "drop table orderTopping; drop table sale; drop table orderItem; drop table cart; drop table product; drop table topping; drop table customer;"