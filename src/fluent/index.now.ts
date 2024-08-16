import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { ClientScript } from '@servicenow/sdk/core'
import { Table, DateColumn, StringColumn } from '@servicenow/sdk/core'
import { showStateUpdate } from '../server/script.js'

//creates todo table, with three columns (deadline, status and task)
export const x_snc_example_todo= Table({
    name: 'x_revfo_mavenwidge_demotable',
    schema: {
        deadline: DateColumn({ label: 'deadline' }),
        state: StringColumn({
            label: 'State',
            choices: {
                ready: { label: 'Ready' },
                completed: { label: 'Completed' },
                in_progress: { label: 'In Progress' },
            },
        }),
        task: StringColumn({ label: 'Task', maxLength: 120 }),
    },
})

//creates a client script that pops up 'Table loaded successfully!!' message everytime todo record is loaded
ClientScript({
    $id: Now.ID['cs0'],
    name: 'maven_client_script_demo',
    table: 'x_revfo_mavenwidge_demotable',
    active: true,
    applies_extended: false,
    global: true,
    ui_type: 'all',
    description: 'Custom client script generated by Now SDK',
    messages: '',
    isolate_script: false,
    type: 'onLoad',
    script: script`function onLoad() {
        g_form.addInfoMessage("Table loaded successfully!!")
    }`,
})

//creates a business rule that pops up state change message whenever a todo record is updated
BusinessRule({
    $id: Now.ID['br0'],
    action: ['update'],
    table: 'x_revfo_mavenwidge_demotable',
    script: showStateUpdate,
    name: 'LogStateChange',
    order: 100,
    when: 'after',
    active: true,
})

ClientScript({
    $id: Now.ID['cs0'],
    name: 'another_maven_client_script_demo',
    table: 'x_revfo_mavenwidge_demotable',
    active: true,
    applies_extended: false,
    global: true,
    ui_type: 'all',
    description: 'Generated from VS Code SDK',
    messages: '',
    isolate_script: false,
    type: 'onLoad',
    script: script`function onLoad() {
        g_form.addInfoMessage("TThis is for an SDK Demo")
    }`,
})