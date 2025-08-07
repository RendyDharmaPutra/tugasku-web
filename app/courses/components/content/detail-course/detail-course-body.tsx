import {
  DescriptionSection,
  MaterialsSection,
  TaskListSection,
} from "./body-section";

interface DetailCourseBodyProps {}

export const DetailCourseBody = ({}: DetailCourseBodyProps) => {
  const TEMP_TASK = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, totam.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ex officiis illo laborum consequatur molestiae atque, temporibus tenetur odit officia.",
      deadline: "10 Juli 2025",
      status: "Selesai",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, totam.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ex officiis illo laborum consequatur molestiae atque, temporibus tenetur odit officia.",
      deadline: "10 Juli 2025",
      status: "Belum Selesai",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, totam.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ex officiis illo laborum consequatur molestiae atque, temporibus tenetur odit officia.",
      deadline: "10 Juli 2025",
      status: "Selesai",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, totam.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ex officiis illo laborum consequatur molestiae atque, temporibus tenetur odit officia.",
      deadline: "10 Juli 2025",
      status: "Belum Selesai",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, totam.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ex officiis illo laborum consequatur molestiae atque, temporibus tenetur odit officia.",
      deadline: "10 Juli 2025",
      status: "Selesai",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, totam.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ex officiis illo laborum consequatur molestiae atque, temporibus tenetur odit officia.",
      deadline: "10 Juli 2025",
      status: "Selesai",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, totam.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ex officiis illo laborum consequatur molestiae atque, temporibus tenetur odit officia.",
      deadline: "10 Juli 2025",
      status: "Selesai",
    },
  ];

  return (
    <section className="flex flex-col gap-8 w-full h-fit">
      <DescriptionSection
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          maiores mollitia voluptates. Tempora accusantium facere modi culpa
          cupiditate ad aperiam eos, corporis, officiis debitis consequuntur
          aspernatur iste perspiciatis velit quisquam fugiat at voluptatem
          dolores iure deleniti quasi nesciunt repudiandae, quos quaerat. Ex
          praesentium ea at quam fugiat tempora reprehenderit pariatur
          temporibus laudantium. Incidunt molestiae hic assumenda amet, optio
          cumque id debitis quod nostrum dicta quasi eligendi. Earum vel
          consequatur enim, illum culpa voluptatibus maxime. Voluptas voluptatum
          obcaecati voluptatem qui natus nisi praesentium expedita eum corrupti!
          Ab ex dolores aliquam modi molestiae, rem voluptas repudiandae hic
          nisi, voluptates itaque porro asperiores!"
      />
      <MaterialsSection materialsCount={20} code="JNCK123" />
      <TaskListSection tasks={TEMP_TASK} />
    </section>
  );
};
