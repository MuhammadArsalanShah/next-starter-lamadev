"use client";

import Link from "next/link"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

const NavigationTestPage = () => {

  // CLIENT SIDE NAVIGATION
  const router = useRouter();
  const path = usePathname();
  const serachParam = useSearchParams();

  console.log(serachParam.get('q'))

  function handleClick() {
    console.log('Button Clicked ...');
    router.push("/");
    // router.replace("/");
    // router.refresh();
    // router.back()
    // router.forward();
  }
  return (
    <div>
      <h1 style={{marginBottom: '15px'}}>Navigation Test Page</h1>
      <Link href="/" prefetch={false}>Click here ...</Link>
      <br />
      <br />
      <button style={{padding: '10px 20px'}} onClick={handleClick}>Click button</button>
    </div>
  )
}

export default NavigationTestPage