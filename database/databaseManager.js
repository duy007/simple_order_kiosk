#!/usr/bin/env node
import { DatabaseSync } from 'node:sqlite';

const database = new DatabaseSync('./orderKiosk.db');

const query = database.prepare('SELECT * FROM orderTopping;');

const obj = query.all();

console.log(obj);

