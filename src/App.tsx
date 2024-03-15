"use client"
import IconButton from "./components/custom/iconButton";
import { Icon } from "./components/custom/icon";
import Card from "./components/custom/card";
import { Box,Flex } from "@radix-ui/themes";
import { useState, useEffect } from "react";

const Array = [
  "/img1.jpg", "/img2.jpg","/img3.jpg", "/img4.jpg"
]

const App = () => {
  const [label, setLabel] = useState(0)
  const lastIndex = Array.length-1
  

  // const handleCount = () => {
  //   setCount(count + 1)
  // }

  useEffect(() => {
      const interval = setInterval(handleNext, 5000);
      return () => {
        clearInterval(interval)
      }
  }
    );


  const handleNext = () => {
      if(label >= lastIndex){
        setLabel(0)
      }else{
        setLabel((prev) => (prev + 1) % Array.length)
      }
  }

  const handlePrev = () => {
    if(label <= 0){
      setLabel(lastIndex)
    }else{
      setLabel((prev) => (prev - 1) % Array.length)
    }
  }

  return (
    <main className="m-4 justify-center">
      <Flex justify="center" align="center" gap="4">
        <IconButton onClick={handlePrev} icon={<Icon.left />} variant="surface" colors="blue"/>
        <Box className="w-fit h-full">
          <Card className={`m-4 w-[300px] h-[200px] text-white text-center rounded-md relative`}>
            <Flex>
            {
            Array.map((img, idx) => (
                <img key={idx} src={img} className={`absolute  duration-300 ${label === idx ? "visible opacity-100" : "collapse opacity-0"}`}/>
                ))
            }
            </Flex>
          </Card>
        </Box>
        <IconButton onClick={handleNext} icon={<Icon.right />} variant="surface" colors="blue"/>
      </Flex>

      {/* <Flex>
        <Text>{count}</Text>
        <Button onClick={handleCount}>Count</Button>
      </Flex> */}
    </main>
  );
};

export default App;
