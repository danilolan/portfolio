import getDictionary from "@/dictionary"


export default async function Work(){
  const data = await getDictionary("pt")
  console.log(data)
  return((
    <div>
      
    </div>
  ))
}