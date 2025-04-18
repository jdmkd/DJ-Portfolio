import Section from "../widgets/Section";
import Heading from "../widgets/Heading";
import { service1, service2, service3, check } from "../../assets";
import { werewolfServices, werewolfServicesIcons } from "../../constants";
import { AcademicsBg } from "../../constants";
import Table from './Table.jsx'

import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "../design/Services";

import Generating from "../widgets/Generating";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import DownloadPdf from "../DownloadPdf/Downloadpdf";

const Academics = () => {
  return (
    <Section crosses id="acadamics" className="bg-black/60">
      <div className="container pb-[1rem] md:pb-[1rem]">
        <Heading
          className="text-[10rem] font-bold my-[2rem!important]"
          title="Academic Qualification"
        />
          
        <Table />
        <DownloadPdf />
      </div>
    </Section>
  );
};

export default Academics;
