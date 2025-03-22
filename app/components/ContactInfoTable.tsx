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
import { User, Mail, UserCog, Users } from "lucide-react";
import { ContactInfo } from "../types";

export default function ContactInfoTable({ info }: { info: ContactInfo }) {
  return (
    <div className="overflow-x-auto p-4 bg-black bg-opacity-50">
      <Table className="w-full">
        <TableCaption className="text-cyan-300 text-lg mt-4 mb-2">
          Contact Information Details
        </TableCaption>
        <TableHeader>
          <TableRow className="border-b border-purple-500">
            <TableHead className="text-cyan-400 font-bold">Registrant Name</TableHead>
            <TableHead className="text-cyan-400 font-bold">Technical Contact Name</TableHead>
            <TableHead className="text-cyan-400 font-bold">Administrative Contact Name</TableHead>
            <TableHead className="text-cyan-400 font-bold">Contact Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="hover:bg-purple-900 hover:bg-opacity-30 transition-colors">
            <TableCell className="py-4 text-white">
              <div className="flex items-center space-x-2">
                <User size={16} className="text-cyan-400" />
                <span>{info.registrantName}</span>
              </div>
            </TableCell>
            <TableCell className="py-4 text-white">
              <div className="flex items-center space-x-2">
                <UserCog size={16} className="text-purple-400" />
                <span>{info.technicalContactName}</span>
              </div>
            </TableCell>
            <TableCell className="py-4 text-white">
              <div className="flex items-center space-x-2">
                <Users size={16} className="text-green-400" />
                <span>{info.administrativeContactName}</span>
              </div>
            </TableCell>
            <TableCell className="py-4 text-white">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-red-400" />
                <span>{info.contactEmail}</span>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}