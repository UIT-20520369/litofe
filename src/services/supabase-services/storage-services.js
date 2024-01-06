import supabase from "./supabase"
async function uploadFile(file,bucket,folder) {
    const date =new Date().toJSON();
    const { data, error } = await supabase.storage.from(bucket).upload(`${folder}/${file.name}${date}`, file)
    if (error) {
      // Handle error
    } else {
      // Handle success
    }
    const url = await supabase.storage
    .from(bucket)
    .getPublicUrl(`${folder}/${file.name}${date}`);
  return url.data.publicUrl;
  }
async function removeFile(file,bucket,folder)
{
  const { data, error } = await supabase
  .storage
  .from(bucket)
  .remove([`${folder}/${file}`]);
  return data;
}
  export const storageServices ={uploadFile,removeFile}