"use client";

import { Button } from "@/uikit/ui/basic/button/button";
import Link from "next/link";



export default function Dashboard() {
  return (
    <div>
     <div className="space-y-8 p-6 max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">কাস্টম বাটন কম্পোনেন্ট</h2>
      
      {/* কালার ভ্যারিয়েন্ট */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">কালার ভ্যারিয়েন্টস</h3>
        <div className="flex flex-wrap gap-2">
          <Button color="primary">প্রাইমারি</Button>
          <Button color="secondary">সেকেন্ডারি</Button>
          <Button color="success">সাকসেস</Button>
          <Button color="danger">ডেঞ্জার</Button>
          <Button color="warning">ওয়ার্নিং</Button>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Link</h3>
        <div className="flex flex-wrap gap-2">
          <Button.Link as={Link} href="/lead" color="primary" startIcon="check" variant="gradient" loading />
          <Button.Link as={Link} href="/lead" color="primary" startIcon="check" variant="gradient" >Primary Link </Button.Link>
          <Button color="secondary" startIcon="save"  />
          <Button color="success">সাকসেস</Button>
          <Button color="danger">ডেঞ্জার</Button>
          <Button color="warning">ওয়ার্নিং</Button>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">কালার ভ্যারিয়েন্টস</h3>
        <div className="flex flex-wrap gap-2">
          <Button color="primary" loading>প্রাইমারি</Button>
          <Button color="secondary">সেকেন্ডারি</Button>
          <Button color="success">সাকসেস</Button>
          <Button color="danger">ডেঞ্জার</Button>
          <Button color="warning"  >ওয়ার্নিং</Button>
        </div>
      </div>
      
      {/* স্টাইল ভ্যারিয়েন্ট */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">স্টাইল ভ্যারিয়েন্টস</h3>
        <div className="flex flex-wrap gap-2">
          <Button color="primary" variant="solid">সলিড</Button>
          <Button color="primary" variant="outline">আউটলাইন</Button>
          <Button color="secondary" variant="outline" className="text-blue-600">আউটলাইন</Button>
          <Button color="primary" variant="ghost" startIcon="check" >ঘোস্ট</Button>
        </div>
      </div>
      
      {/* সাইজ ভ্যারিয়েন্ট */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">সাইজ ভ্যারিয়েন্টস</h3>
        <div className="flex flex-wrap gap-2 items-center">
          <Button color="primary" size="sm">স্মল</Button>
          <Button color="primary" size="md">মিডিয়াম</Button>
          <Button color="primary" size="lg">লার্জ</Button>
        </div>
      </div>
      
      {/* আইকন সহ বাটন */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">আইকন সহ বাটন</h3>
        <div className="flex flex-wrap gap-2">
          <Button color="primary" startIcon="check">শুরুতে আইকন</Button>
          <Button color="primary" endIcon="arrow-right">শেষে আইকন</Button>
          <Button color="success" startIcon="check" endIcon="arrow-right">দুই পাশে আইকন</Button>
        </div>
      </div>
      
      {/* রাউন্ডেড ভ্যারিয়েন্ট */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">রাউন্ডেড ভ্যারিয়েন্টস</h3>
        <div className="flex flex-wrap gap-2">
          <Button color="primary" rounded="sm">স্মল রাউন্ডেড</Button>
          <Button color="primary" rounded="md">মিডিয়াম রাউন্ডেড</Button>
          <Button color="primary" rounded="lg">লার্জ রাউন্ডেড</Button>
          <Button color="primary" rounded="full">ফুল রাউন্ডেড</Button>
        </div>
      </div>
      
      {/* গ্রাডিয়েন্ট বাটন */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">গ্রাডিয়েন্ট বাটন</h3>
        <div className="flex flex-wrap gap-2">
          <Button color="primary" variant="gradient">প্রাইমারি গ্রাডিয়েন্ট</Button>
          <Button color="success" variant="gradient">সাকসেস গ্রাডিয়েন্ট</Button>
          <Button color="danger" variant="gradient">ডেঞ্জার গ্রাডিয়েন্ট</Button>
          <Button color="purple" variant="gradient">পার্পল গ্রাডিয়েন্ট</Button>
          <Button color="indigo" variant="gradient">ইন্ডিগো গ্রাডিয়েন্ট</Button>
        </div>
      </div>
      
      {/* বিশেষ গ্রাডিয়েন্ট বাটন */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">বিশেষ গ্রাডিয়েন্ট বাটন</h3>
        <div className="flex flex-wrap gap-2">
          <Button color="fancy" variant="gradient" rounded="lg">ফ্যান্সি গ্রাডিয়েন্ট</Button>
          <Button color="sunset" variant="gradient" rounded="lg">সানসেট গ্রাডিয়েন্ট</Button>
          <Button color="ocean" variant="gradient" rounded="lg">ওশেন গ্রাডিয়েন্ট</Button>
          <Button color="forest" variant="gradient" rounded="lg">ফরেস্ট গ্রাডিয়েন্ট</Button>
        </div>
      </div>
      
      {/* গ্রাডিয়েন্ট সহ আইকন */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">গ্রাডিয়েন্ট আইকন বাটন</h3>
        <div className="flex flex-wrap gap-2">
          <Button color="fancy" variant="gradient" startIcon="arrow-right">আইকন সহ</Button>
          <Button color="sunset" variant="gradient" endIcon="download">আইকন সহ</Button>
          <Button color="ocean" variant="gradient" startIcon="check" endIcon="arrow-right">দুই আইকন</Button>
        </div>
      </div>
    </div>
    </div>
  );
}
