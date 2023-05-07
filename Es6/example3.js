const shower = async(startTime) =>{
    console.log(`StartTime shower at ${startTime}`);
    //wait 5 secends
    await new Promise((resolved)=> setTimeout(resolved,5000));
    console.log(`Finshed Shower at ${new Date().toLocaleTimeString()}`);
    return new Date();
};


const eatbreckfast = async(startTime) =>{
    console.log(`StartTime eatbreckfast at ${startTime}`);
    //wait 10 secends
    await new Promise((resolved)=> setTimeout(resolved,10000));
    console.log(`Finshed eatbreckfast at ${new Date().toLocaleTimeString()}`);
    return new Date();
};

const getdressd = async(startTime) =>{
    console.log(`StartTime getdressd at ${startTime}`);
    //wait 5 secends
    await new Promise((resolved)=> setTimeout(resolved,5000));
    console.log(`Finshed getdressd at ${new Date().toLocaleTimeString()}`);
    return new Date();
};


const hairstyle = async(startTime) =>{
    console.log(`StartTime hairstyle at ${startTime}`);
    //wait 10 secends
    await new Promise((resolved)=> setTimeout(resolved,10000));
    console.log(`Finshed hairstyle at ${new Date().toLocaleTimeString()}`);
    return new Date();
};


const readnew = async(startTime) =>{
    console.log(`StartTime readnew at ${startTime}`);
    //wait 5 secends
    await new Promise((resolved)=> setTimeout(resolved,5000));
    console.log(`Finshed readnew at ${new Date().toLocaleTimeString()}`);
    return new Date();
};






const morningRoutine = async (startTime) => {
    const step1FinshTime = await shower(startTime);
    const step2FinshTime = await eatbreckfast(step1FinshTime);
    const step3FinshTime = await getdressd(step2FinshTime);
    const step4FinshTime = await hairstyle(step3FinshTime);
    const step5FinshTime = await readnew(step4FinshTime);
    return step5FinshTime;

} ;


morningRoutine('11:45')
.then((finishTime)=>{
    console.log(`Morning routine completed at ${finishTime.toLocaleTimeString()}`);
})
.catch((error) => {
    console.error('An error occurred:', error);
  });




