
/*
  This component is meant to be the landing page for the app
  This is where we will pull the user's rss list from the api
  We will also display any feeds such as the newest episodes...maybe
*/



async function fetchAPI( url? : string){
  const req = await fetch(url ?? '127.0.0.1:3000/api')
  const res = await req.text()
  
  console.log(res)
}

function Home(){
  fetchAPI()
  return <>

  </>
}

export default Home