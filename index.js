function helloNpm() {
  return "hello NPM"
}

function randomWait(min, max)
{
	return new Promise(resolve=>{
		const rand = Math.floor(Math.random() * (max - min +1))+ + min;
		console.log(`waiting ${rand} second${rand>1? 's':''}`);
		setTimeout(()=>{
			resolve();
		},rand*1_000);

	})
}
module.exports ={ helloNpm, randomWait}