import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: 'd2efb245432c404683156ae1cc87dca3'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'd2564e6a4e594c0c92c004d1adb90de3'
                    }
                }
            }
        }
    }
}
