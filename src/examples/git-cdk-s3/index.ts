import { Action, ActionApp, bootstrapApp } from "@wbce/orbits-core";
import { CdkDeployAction, CdkHelperApp } from "@wbce/orbits-fuel";
import { CdkBootstrapFrontStack, CdkDeployFrontStack } from "./src/cdk-stack/cdk-action";
import {CiPipeline} from "./src/main-workflow";

@bootstrapApp({
    db : {
        mongo: {
            url: 'mongodb://localhost:27017/example'
        }
    }
})
export class ExampleApp extends ActionApp{
    declare = [CiPipeline, CdkDeployFrontStack, CdkBootstrapFrontStack]
    imports: (typeof ActionApp)[]= [CdkHelperApp];
}

ActionApp.waitForActiveApp.then(()=>{
    console.log("waitforactive app")
    ActionApp.activeApp.ActionModel.findOne({
        filter : {
            main : true
        }
    }).then((actionDb)=>{
        console.log("actionDbFinding")
        if(actionDb){
            //action already exists
            const action = Action.constructFromDb(actionDb);
            action.resume();
            return;
        }
        //create main action
        const pipeline = new CiPipeline();
        pipeline.setFilter({
            main : true
        })
        pipeline.dbDoc.save();
    })
})
