const user = {email: 'promise@yahoo.mail'}

try{
  // Produce a Refrence error
  // myFunction ();

  // produce a TypeError  
  // null.myFunction();

  // lets produce syntax
  // eval("2+2");

  // will produce URI error 
  // decodeURIComponent('%')

  if(!user.name){
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }

} catch(e){
  console.log(`User Error: ${e.message}`);
  // console.log(e.message);
  // console.log(e.name)
  // console.log(e instanceof ReferenceError);
} finally {
  console.log('finally runs no matter the result...');
}

console.log('programing continue');