"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Search, Globe, Database } from "lucide-react";
import ContactInfoTable from "./ContactInfoTable";
import DomainInfoTabe from "./DomainInfoTabe";
import type { LookupType, DomainInfo, ContactInfo } from "../types";

export default function DomainLookup() {
  const [domain, setDomain] = useState("");
  const [lookupType, setLookupType] = useState<LookupType>("domain");
  const [result, setResult] = useState<DomainInfo | ContactInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChangeLookupType = (value: LookupType) => {
    setResult(null);
    setLookupType(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    setLoading(true);

    try {
      const response = await fetch("/api/lookup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ domain, type: lookupType }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to lookup domain information");
      }

      setResult(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to lookup domain information. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Cool background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 opacity-50"></div>
      
      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 bg-repeat opacity-10"></div>
      
      <div className="relative container mx-auto p-6 max-w-5xl">
        {/* Cool header with glow effect */}
        <div className="text-center mb-12 mt-8">
          <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 inline-block">
            DOMAIN RADAR
          </h1>
          <p className="text-cyan-300 text-lg">Scan The Digital Universe</p>
        </div>
        
        {/* Neon-styled search form */}
        <div className="mb-10 backdrop-blur-lg bg-black bg-opacity-30 rounded-xl p-6 border border-purple-500 shadow-lg shadow-purple-500/20">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center">
                <Search size={18} className="text-black" />
              </div>
              <span className="text-xl font-semibold text-cyan-300">Domain Scanner</span>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <Input
                  placeholder="Enter domain name to scan..."
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full h-12 bg-black bg-opacity-50 border-purple-500 text-white focus:border-cyan-400 focus:ring focus:ring-cyan-400 focus:ring-opacity-50"
                />
              </div>
              <div className="w-full md:w-64">
                <Select value={lookupType} onValueChange={handleChangeLookupType}>
                  <SelectTrigger className="h-12 bg-black bg-opacity-50 border-purple-500 text-white">
                    <SelectValue placeholder="Select scan type" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-purple-500 text-white">
                    <SelectItem value="domain" className="focus:bg-purple-900">
                      <div className="flex items-center gap-2">
                        <Globe size={16} className="text-cyan-400" />
                        Domain Info
                      </div>
                    </SelectItem>
                    <SelectItem value="contact" className="focus:bg-purple-900">
                      <div className="flex items-center gap-2">
                        <Database size={16} className="text-cyan-400" />
                        Contact Info
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button 
                type="submit" 
                disabled={loading || !domain}
                className="h-12 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                {loading ? "SCANNING..." : "SCAN NOW"}
              </Button>
            </div>
          </form>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-8 bg-red-900 border-red-500 shadow-lg shadow-red-500/20">
            <AlertCircle className="h-5 w-5 text-red-400" />
            <AlertTitle className="text-red-300">Scan Failed</AlertTitle>
            <AlertDescription className="text-red-100">{error}</AlertDescription>
          </Alert>
        )}

        {loading && (
          <div className="flex justify-center my-12">
            {/* Cool cyberpunk-style loading animation */}
            <div className="relative">
              <div className="w-16 h-16 border-4 border-purple-500 border-t-cyan-400 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-500 rounded-full animate-ping opacity-30"></div>
            </div>
          </div>
        )}

        {result && !loading && (
          <div className="backdrop-blur-lg bg-black bg-opacity-30 rounded-xl overflow-hidden border border-cyan-500 shadow-lg shadow-cyan-500/20 animate-fadeIn">
            <div className="p-4 bg-gradient-to-r from-purple-900 to-blue-900 flex items-center gap-3">
              {lookupType === "domain" ? (
                <Globe size={24} className="text-cyan-400" />
              ) : (
                <Database size={24} className="text-cyan-400" />
              )}
              <h2 className="text-xl font-semibold text-white">
                {lookupType === "domain" ? "Domain Information" : "Contact Information"}
              </h2>
            </div>
            <div className="p-1 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
            <div className="text-white">
              {lookupType === "domain" ? (
                <DomainInfoTabe info={result as DomainInfo} />
              ) : (
                <ContactInfoTable info={result as ContactInfo} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}