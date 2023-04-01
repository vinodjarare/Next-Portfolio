import Image from "next/image";

const ProfileCover = () => {
  return (
    <div className="h-60 w-full">
      <Image
        src={"/cover-image.jpg"}
        alt="cover"
        width={100}
        height={100}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default ProfileCover;
