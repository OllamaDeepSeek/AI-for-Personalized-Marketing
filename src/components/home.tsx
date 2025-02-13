import React from "react";
import DashboardHeader from "./dashboard/DashboardHeader";
import CampaignOverview from "./dashboard/CampaignOverview";
import CampaignWizard from "./dashboard/CampaignWizard";
import PerformanceMetrics from "./dashboard/PerformanceMetrics";
import ContentGenerator from "./dashboard/ContentGenerator";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto py-6 space-y-6">
        {/* Campaign Overview Section */}
        <section>
          <CampaignOverview />
        </section>

        {/* Two Column Layout for Wizard and Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Create Campaign</h2>
            <CampaignWizard />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Performance</h2>
            <PerformanceMetrics />
          </section>
        </div>

        {/* Content Generator Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Content Generation</h2>
          <ContentGenerator />
        </section>
      </main>
    </div>
  );
};

export default Home;
