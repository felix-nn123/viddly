import * as Sentry from '@sentry/browser';



function init(){

Sentry.init({dsn: "https://5b0e7f56f743486994dfea00bbad620b@o385086.ingest.sentry.io/5217304"});


}


function log(error){
    

Sentry.captureException("logging the error", error);


}

export default{

init,
log

}