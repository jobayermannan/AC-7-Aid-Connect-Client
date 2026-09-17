

import { useState } from "react";

export type UserProps = {
  name: string;
  email: string;
  saleAmount: string;
};

export default function DashboardUserDonationCard(props: UserProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="  flex flex-wrap justify-between gap-3 ">
      <section className="flex justify-between gap-3 ">
        <div className=" h-12 w-12 rounded-full bg-gray-100 p-1">
          <img width={200} height={200} src={imgError ? '/placeholder.png' : `https://api.dicebear.com/7.x/thumbs/svg?seed=${props.name}`} alt="avatar" onError={() => setImgError(true)} />
        </div>
        <div className="text-sm">
            <p>{props.name}</p>
            <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px]  sm:w-auto  text-gray-400">
                {props.email}
            </div>
        </div>
      </section>
        <p>{props.saleAmount}</p>
    </div>
  );
}