import { addPost, deletePost } from "@/lib/action";

const ServerActionTestPage = () => {

  // const actionInComponent = async () => {
  //   "use server";
  //   console.log("Its working in component...!");
  // }
  return (
    <div>
      <form action={addPost}>
        <input type="text" name="title" placeholder="title" /><br /><br />
        <input type="text" name="desc" placeholder="desc" /><br /><br />
        <input type="text" name="slug" placeholder="slug" /><br /><br />
        <input type="text" name="userId" placeholder="userId" /><br /><br />

        <button>Create</button>
      </form>
      <br /><br />
      <form action={deletePost}>
        <input type="text" name="id" placeholder="post id ..." />
        <br /><br />
        <button>Delete</button>
      </form>
    </div>
  )
}

export default ServerActionTestPage