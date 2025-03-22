"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Globe, Calendar, Clock, Server } from "lucide-react";
import { DomainInfo } from "../types";

export default function DomainInfoTabe({ info }: { info: DomainInfo }) {
  return (
    <div className="overflow-x-auto p-4 bg-black bg-opacity-50">
      <Table className="w-full">
        <TableCaption className="text-cyan-300 text-lg mt-4 mb-2">
          Domain Information
        </TableCaption>
        <TableHeader>
          <TableRow className="border-b border-purple-500">
            <TableHead className="text-cyan-400 font-bold">Domain Name</TableHead>
            <TableHead className="text-cyan-400 font-bold">Registrar</TableHead>
            <TableHead className="text-cyan-400 font-bold">Registration Date</TableHead>
            <TableHead className="text-cyan-400 font-bold">Expiration Date</TableHead>
            <TableHead className="text-cyan-400 font-bold">Estimated Domain Age</TableHead>
            <TableHead className="text-cyan-400 font-bold">Hostnames</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="hover:bg-purple-900 hover:bg-opacity-30 transition-colors">
            <TableCell className="py-4 text-white">
              <div className="flex items-center space-x-2">
                <Globe size={16} className="text-cyan-400" />
                <span>{info.domainName}</span>
              </div>
            </TableCell>
            <TableCell className="py-4 text-white">{info.registrar}</TableCell>
            <TableCell className="py-4 text-white">
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-purple-400" />
                <span>{info.registrationDate}</span>
              </div>
            </TableCell>
            <TableCell className="py-4 text-white">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-red-400" />
                <span>{info.expirationDate}</span>
              </div>
            </TableCell>
            <TableCell className="py-4 text-white">{info.estimatedDomainAge}</TableCell>
            <TableCell className="py-4 text-white">
              <div className="flex items-center space-x-2">
                <Server size={16} className="text-green-400" />
                <span>
                  {info.hostnames.join(", ").length > 25
                    ? info.hostnames.join(", ").substring(0, 25) + "..."
                    : info.hostnames.join(", ")}
                </span>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
      {/* Detailed Hostnames Section */}
      {info.hostnames.length > 0 && info.hostnames.join(", ").length > 25 && (
        <div className="mt-6 p-4 rounded-lg bg-black bg-opacity-40 border border-purple-500">
          <h3 className="text-cyan-400 font-bold flex items-center mb-2">
            <Server size={18} className="mr-2" />
            Complete Hostname List
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {info.hostnames.map((hostname, index) => (
              <li key={index} className="text-white bg-purple-900 bg-opacity-30 px-3 py-2 rounded">
                {hostname}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}