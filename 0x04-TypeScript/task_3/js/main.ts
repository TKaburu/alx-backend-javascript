/// <reference path="crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Silva',
}

// Object called row with the type RowElement
const newRowID: RowID = CRUD.insertRow(row);

// Variable named newRowID with the type RowID
const updateRow: RowElement = { ...row, age: 23 };

CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);