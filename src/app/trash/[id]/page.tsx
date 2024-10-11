"use client";

import ContainerWrap from "@/components/layouts/container-wrap";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { saveToSessionStorage } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { Suspense, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/lib/features/counter/counterSlice";

type Props = {
  params: {
    id: string;
  };
};

type stateProps = {
  counter: {
    value: number;
  };
};
export default function TrashDetail({ params }: Props) {
  //useSelector gets the state from store
  const count = useSelector((state: stateProps) => state.counter.value); // Access the counter state

  //useDispatch updates the store with the state from a component, as defined by your logic inside the counterslice.js
  const dispatch = useDispatch();

  const linkHistory = sessionStorage.getItem("link-history") || "/";
  const pathname = usePathname();
  const router = useRouter();

  const commentData = [
    {
      id: 1,
      name: "rianabdillah",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed laborum alias eos excepturi perspiciatis velit sit dicta ratione repellendus? Provident, illo rerum, minus ab harum error porro veritatis reprehenderit blanditiis deserunt voluptatum? Quam dolor sunt saepe quaerat libero iusto doloribus fugiat consequatur dolore vitae quas animi, quis, mollitia odio eligendi?",
    },
    {
      id: 2,
      name: "doejohn",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci magnam, atque quod nisi consequatur autem, deleniti, impedit architecto quia recusandae veniam dicta eligendi quo? Atque, ad vel. Maiores, consequatur, quod veniam voluptas quaerat voluptatum, necessitatibus dicta veniam exp",
    },
  ];

  function handleBack() {
    saveToSessionStorage("link-history", pathname);
    router.push(linkHistory);
  }

  const listImage = [
    "/images/initial-trash.png",
    "/images/initial-trash1.jpg",
    "/images/initial-trash2.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState<number>(0);

  function handleImage(index: number) {
    setSelectedImage(index);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { id } = params;
  return (
    <div className="min-h-dvh flex flex-col items-center">
      <div>
        <h1>Counter: {count}</h1> {/* Display the counter state */}
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <ContainerWrap>
        <input
          value={name}
          onChange={(e) => dispatch(setProductName(e.target.value))}
        />
        <div className="container">
          <Button
            variant={"link"}
            className="flex flex-row items-center gap-x-2 px-0 font-bold hover:no-underline"
            onClick={handleBack}
          >
            <Image
              src={"/images/icons/arrow-left-icon.png"}
              alt=""
              width={15}
              height={15}
            />
            Kembali
          </Button>
          <Separator orientation="horizontal" />
        </div>
      </ContainerWrap>

      <ContainerWrap className="my-10">
        <div className="container flex flex-row">
          {/* <div>TrashDetail {params.id}</div> */}
          <div className="basis-1/4 space-y-3">
            <Image
              className="w-full object-cover aspect-square"
              src={listImage[selectedImage]}
              alt=""
              width={300}
              height={300}
            />
            <div className="grid grid-cols-3 grid-flow-row gap-3">
              {listImage.map((item, index) => {
                if (index === selectedImage) {
                  return;
                }
                return (
                  <Image
                    key={index}
                    onClick={() => handleImage(index)}
                    className="w-full object-cover aspect-square cursor-pointer"
                    src={item}
                    alt=""
                    width={300}
                    height={300}
                  />
                );
              })}
            </div>
          </div>
          <div className="basis-3/4 ml-5 flex flex-col gap-y-9">
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg leading-3">
                Sampah Pinggir Kali {params.id}
              </h3>
              <div>Jakarta selatan</div>
            </div>

            <div className="flex flex-col gap-y-1">
              <h4>Deskripsi</h4>
              <Separator orientation="horizontal" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                illo nisi praesentium ab harum at illum neque ullam nulla
                pariatur earum ad sit veniam, error dolor natus id quisquam
                doloremque, tenetur accusamus corporis libero, quaerat possimus
                consequatur. Sit culpa temporibus ipsum ut voluptate expedita,
                sequi incidunt consequuntur ea ullam nisi.
              </p>
            </div>

            <div className="flex flex-col gap-y-1">
              <h4>Titik lokasi</h4>
              <Separator orientation="horizontal" />

              <Link href={"#"} className="inline-flex items-center gap-x-2">
                <span>T</span>
                https://google.maps.com
              </Link>
            </div>

            <div className="flex flex-col gap-y-1">
              <h4>Pengunggah</h4>
              <Separator orientation="horizontal" />

              <Link href={"#"} className="w-max">
                Seseorang
              </Link>
            </div>

            <Button variant={"default"} className="w-max">
              Bersihkan
            </Button>
          </div>
        </div>
      </ContainerWrap>
      <ContainerWrap>
        <div className="container flex flex-col gap-2">
          <div className="inline-flex gap-2 items-center p-0">
            <h3 className="font-semibold text-lg leading-3">Diskusi</h3>
          </div>

          <Suspense fallback={<div>Loading</div>}>
            <div className="mt-5 flex flex-col gap-5">
              {commentData &&
                commentData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex flex-row items-start gap-2 relative"
                    >
                      <Image
                        className="rounded-full w-12"
                        src={"/images/initial-trash.png"}
                        alt=""
                        width={100}
                        height={100}
                      />
                      <div className="my-auto p-0 flex flex-col gap-1">
                        <span className="font-semibold">
                          {item.name}
                          <span className="text-gray-500"> | </span>
                          <span className="text-xs font-extralight text-gray-500 leading-[8px]">
                            5 menit yang lalu
                          </span>
                        </span>
                        <p>{item.body}</p>
                        <Button
                          variant={"link"}
                          className="w-max p-0 underline underline-offset-1"
                        >
                          Balas komentar
                        </Button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </Suspense>
          <form action="" className="flex flex-col gap-2 mt-5">
            <textarea
              rows={4}
              className="w-full border border-black p-2 resize-none"
              placeholder="Waah dekat rumah saya nih, gaskeun!!"
            ></textarea>

            <Button type="submit" className="w-max">
              Kirim
            </Button>
          </form>
        </div>
      </ContainerWrap>
    </div>
  );
}
