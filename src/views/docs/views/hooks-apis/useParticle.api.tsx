import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseParticle() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "config",
      type: "ParticleConfig",
      defaultValue: {},
      desc: "Optional particle animation and trigger settings.",
      properties: [
        { name: "color", type: "React.CSSProperties[\"color\"]", desc: "Particle color." },
        { name: "duration", type: "number", defaultValue: 500, desc: "Animation duration in milliseconds." },
        { name: "trigger", type: "\"click\" | \"mousedown\" | \"pointerdown\"", defaultValue: "mousedown", desc: "Pointer event that starts the particle animation." },
        { name: "num", type: "number", defaultValue: 10, desc: "Number of particles emitted." },
        { name: "size", type: "number", defaultValue: 3, desc: "Particle size used by the worklet." },
      ],
    },
    {
      name: "enable",
      type: "boolean",
      defaultValue: true,
      desc: "Whether the configured event is allowed to start the particle animation.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "ref",
      type: "React.RefObject<T>",
      desc: "Ref to attach to the element that should emit particles.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useParticle</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
