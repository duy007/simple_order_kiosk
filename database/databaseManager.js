#!/usr/bin/env node
import { SQLiteDatabase } from "@andrewitsover/midnight";
import * as schema from '../models/schema.js';


const database = new SQLiteDatabase('./database/orderKiosk.db');
const db = database.getClient(schema);

export default db;