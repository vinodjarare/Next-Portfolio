import Image from "next/image";

const ProfileCover = () => {
  return (
    <div className="h-60 w-full relative">
      <Image
        src={"/cover-image.jpg"}
        alt="cover"
        fill={true}
        priority={true}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default ProfileCover;
