# azure functions samples

## local setup
Create a `local.settings.json` file in the root of the proyect with the following content.

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "StorageConnectionString": "UseDevelopmentStorage=true"
  }
}
```
Now you will need download some stuff before start.

- [nodejs v14.19](https://nodejs.org/download/release/v14.19.0/)
- [visual studio code.](https://code.visualstudio.com/)
- `Azure Functions` VSC extension.
- [Azurite (npm recomended)](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azurite?tabs=npm#install-azurite)
- [Azure storage explorer](https://azure.microsoft.com/es-mx/features/storage-explorer/)

## developing 
Now that you have installed everything this is the "correct" way to work.
- Start storage emulator, since we are using azurite run this command on a cmd in your project dir.  
`azurite -l azurite`  
This will create a directory to store your blobs.

- Now that azurite is running you can open the **azure storage explorer** to see your files stored in the blob. 
**Important:**  
For local development I recommend the usage of [the default credentials](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azurite?tabs=npm#well-known-storage-account-and-key)  
  - Account name: devstoreaccount1
  - Account key: Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==

The setup for local connection of **azure storage explorer** already have those default values set so basically you only need to click next. For the **azurite** side you dont have to do anything.  
You can create custom credentials but I recommend use the default.

Now you can run the azure functions by clicking `Run -> Start Debbuging` in the window menu or in the CLI with `func host start` command.


