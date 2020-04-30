# Issue with ts-loader and aws-sdk

While trying to build a project that relies on S3, I've been unable to use:

* webpack + ts-loader
* aws-sdk
* TypeScript > 3.5.3

## Commands

* `yarn build:webpack` - Runs webpack and ts-loader, recreating error
* `yarn build:tsc` - Runs just TypeScript compiler, succeeds


## Error

When running `yarn build:webpack`, I encounter the following:

```
ERROR in ./node_modules/aws-sdk/lib/event-stream/event-message-chunker-stream.js
Module build failed (from ./node_modules/ts-loader/index.js):
Error: Debug Failure. False expression.
    at getConstructorDefinedThisAssignmentTypes (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:40859:22)
    at getWidenedTypeForAssignmentDeclaration (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:40734:63)
    at getTypeOfVariableOrParameterOrPropertyWorker (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:41067:24)
    at getTypeOfVariableOrParameterOrProperty (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:41015:28)
    at getTypeOfSymbol (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:41339:24)
    at checkPropertyAccessExpressionOrQualifiedName (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:55698:53)
    at checkPropertyAccessExpression (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:55557:17)
    at checkExpressionWorker (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:60102:28)
    at checkExpression (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:60023:38)
    at checkPrefixUnaryExpression (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:58791:31)
    at checkExpressionWorker (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:60139:28)
    at checkExpression (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:60023:38)
    at checkTruthinessExpression (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:62523:42)
    at checkIfStatement (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:62454:24)
    at checkSourceElementWorker (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:64920:28)
    at checkSourceElement (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:64800:17)
    at Object.forEach (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:317:30)
    at checkBlock (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:62090:20)
    at checkSourceElementWorker (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:64914:28)
    at checkSourceElement (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:64800:17)
    at checkWhileStatement (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:62514:13)
    at checkSourceElementWorker (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:64924:28)
    at checkSourceElement (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:64800:17)
    at Object.forEach (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:317:30)
    at checkBlock (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:62086:20)
    at checkSourceElementWorker (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:64914:28)
    at checkSourceElement (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:64800:17)
    at checkFunctionExpressionOrObjectLiteralMethodDeferred (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:58581:21)
    at checkDeferredNode (/Volumes/workplace/ts-loader-aws-sdk-error/node_modules/typescript/lib/typescript.js:65071:21)
    at Map.forEach (<anonymous>)
 @ ./node_modules/aws-sdk/lib/event-stream/streaming-create-event-stream.js 8:32-87
 @ ./node_modules/aws-sdk/lib/node_loader.js
 @ ./node_modules/aws-sdk/clients/s3.js
 @ ./index.ts
 ```
