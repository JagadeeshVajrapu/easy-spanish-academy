import { redirect } from "next/navigation";

/** Legacy / mistaken URL — send admins to the blog dashboard. */
export default function AdminRequestsRedirectPage() {
  redirect("/admin/dashboard");
}
