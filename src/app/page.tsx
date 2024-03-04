import { Button } from "@/src/components/ui/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/src/components/ui/avatar";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import {
  Tabs,
  TabsList,
  TabsContent,
  TabsTrigger,
} from "@/src/components/ui/tabs";
// app components
import { SettingsForm } from "@/src/app/components/settings-form";

export default function DashboardPage() {
  return (
    <div className="container max-w-screen-xl mx-auto space-y-8 py-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      <Tabs defaultValue="company-info" className="space-y-8">
        <TabsList className="max-w-full">
          <ScrollArea className="max-w-full whitespace-nowrap">
            <div className="flex w-max space-x-4">
              <TabsTrigger value="analytics" disabled>
                Your Profile
              </TabsTrigger>
              <TabsTrigger value="company-info">Company Info</TabsTrigger>
              <TabsTrigger value="reports">
                Manage Seats
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Do not Contact
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Integrations
              </TabsTrigger>
            </div>
          </ScrollArea>
        </TabsList>
        <TabsContent value="company-info" className="space-y-12">
          <div className="flex flex-col md:flex-row items-center justify-start md:justify-between">
            <div className="flex items-center w-full md:w-auto order-2 md:order-1">
              <Avatar className="flex h-20 w-20 lg:h-[108px] lg:w-[108px] items-center justify-center space-y-0 p-3 bg-primary">
                <AvatarImage src="/images/shutter.png" alt="Avatar" />
                <AvatarFallback>SH</AvatarFallback>
              </Avatar>
              <div className="ml-6 space-y-1">
                <div className="flex items-center space-x-2 mb-4">
                  <Button variant="destructive">Remove</Button>
                  <Button variant="outline">Change Photo</Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  or drag and drop (SVG, PNG, JPG)
                </p>
              </div>
            </div>
            <div className="flex w-full md:w-auto items-center flex-auto md:flex-none order-1 md:order-2 mb-8 md:mb-0 space-x-2">
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
              <Button form="settings-form" type="submit" className="w-full">
                Save changes
              </Button>
            </div>
          </div>
          <SettingsForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
