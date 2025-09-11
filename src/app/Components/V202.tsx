'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";

import AccountOpen from "@/app/Components/SuccesAccount";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

type InputOTPFormProps = {
  token: string;
};

export default function InputOTPForm({ token }: InputOTPFormProps) {
  const [error, setError] = useState(false);
  const [loading, setLoad] = useState(false);
  const [success, setSuccess] = useState(false);
  const [recend,setRecend] = useState(false)
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const backendUrl = process.env.NEXT_PUBLIC_GO_URL || "http://localhost:8080";

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { pin: "" },
  });

  // Countdown timer for resend button
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendDisabled && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setResendDisabled(false);
    }
    return () => clearTimeout(timer);
  }, [resendDisabled, countdown]);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoad(true);
    setError(false);
    setRecend(false)
    
    try {
      const res = await fetch(`${backendUrl}/api/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: data.pin, token }),
      });

      const result = await res.json();

      if (res.ok && result.data) {
        setSuccess(true);
        setLoad(false);        
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Verification failed:", err);
      setError(true);
    } finally {
      setLoad(false);
    }
  };

  const handleResendCode = async () => {
    setResendDisabled(true);
    setCountdown(15);
    setRecend(false)
    
    try {
      const res = await fetch(`${backendUrl}/api/resend-code`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      if (!res.ok) {
        console.error("Failed to resend code");
      }else{
        setRecend(true)
      }
    } catch (err) {
      console.error("Error resending code:", err);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-6 text-white"
      >
        {
          recend ? <div className="w-full justify-center text-center">
<p className="text-green-500">Code Recend successfully </p>

          </div>: "" 
          
        }
        {success && (
          <AccountOpen />
        )}
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[24px]">Verify your Account</FormLabel>
              <FormDescription>
                Enter the code you received in your Email
              </FormDescription>
              <FormDescription>
                If the message is not in your inbox, check your spam folder.
              </FormDescription>
              
              {error && (
                <span className="text-red-500 block py-2">
                  Incorrect code! Please try again
                </span>
              )}
              
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="justify-center w-full mt-4">
                    {[...Array(6)].map((_, i) => (
                      <InputOTPSlot key={i} index={i} />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2">
          <button 
            type="submit" 
            disabled={loading} 
            className={`bg-[var(--brown)] p-4 uppercase font-semibold rounded-md ${
              loading ? 'cursor-not-allowed opacity-70' : "cursor-pointer hover:bg-[var(--brown-dark)]"
            }`}
          >
            {loading ? <span className="animate-spin">⏳</span> : 'VERIFY'}
          </button>
          <button 
            type="button" 
            onClick={handleResendCode}
            disabled={resendDisabled || loading}
            className={`p-4 uppercase font-semibold rounded-md transition-colors ${
              resendDisabled || loading 
                ? 'bg-gray-500 cursor-not-allowed' 
                : 'bg-[var(--brown)] cursor-pointer hover:bg-[var(--brown-dark)]'
            }`}
          >
            {resendDisabled ? `Operate in ${countdown}s` : 'Resend Code'}
          </button>
        </div>
      </form>
    </Form>
  );
}