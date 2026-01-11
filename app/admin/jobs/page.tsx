// app/admin/jobs/page.tsx - Job Management
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Users,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  X,
  Save,
} from "lucide-react";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  applicants: number;
  status: "active" | "closed" | "draft";
  postedDate: string;
}

export default function AdminJobsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);

  // Sample jobs data
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: "j1",
      title: "Master Tailor",
      department: "Production",
      location: "Abeokuta, Nigeria",
      type: "Full-time",
      salary: "₦80,000 - ₦150,000/month",
      applicants: 12,
      status: "active",
      postedDate: "2026-01-05",
    },
    {
      id: "j2",
      title: "Fashion Designer",
      department: "Design",
      location: "Abeokuta, Nigeria",
      type: "Full-time",
      salary: "₦100,000 - ₦200,000/month",
      applicants: 8,
      status: "active",
      postedDate: "2026-01-03",
    },
    {
      id: "j3",
      title: "Customer Service Representative",
      department: "Sales & Support",
      location: "Abeokuta, Nigeria",
      type: "Full-time",
      salary: "₦50,000 - ₦80,000/month",
      applicants: 25,
      status: "active",
      postedDate: "2025-12-28",
    },
    {
      id: "j4",
      title: "Social Media Manager",
      department: "Marketing",
      location: "Remote",
      type: "Contract",
      salary: "₦70,000 - ₦120,000/month",
      applicants: 18,
      status: "active",
      postedDate: "2025-12-20",
    },
  ]);

  const [newJob, setNewJob] = useState({
    title: "",
    department: "",
    location: "Abeokuta, Nigeria",
    type: "Full-time",
    salary: "",
    description: "",
    requirements: "",
    responsibilities: "",
  });

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteJob = (id: string) => {
    if (confirm("Are you sure you want to delete this job posting?")) {
      setJobs(jobs.filter((j) => j.id !== id));
    }
  };

  const handleAddJob = () => {
    const job: Job = {
      id: `job-${Date.now()}`,
      title: newJob.title,
      department: newJob.department,
      location: newJob.location,
      type: newJob.type,
      salary: newJob.salary,
      applicants: 0,
      status: "active",
      postedDate: new Date().toISOString().split("T")[0],
    };

    setJobs([...jobs, job]);
    setShowAddModal(false);
    setNewJob({
      title: "",
      department: "",
      location: "Abeokuta, Nigeria",
      type: "Full-time",
      salary: "",
      description: "",
      requirements: "",
      responsibilities: "",
    });
  };

  const handleToggleStatus = (id: string) => {
    setJobs(
      jobs.map((job) =>
        job.id === id
          ? {
              ...job,
              status: job.status === "active" ? "closed" : "active",
            }
          : job
      )
    );
  };

  return (
    <div className="min-h-screen bg-brand-cream-200 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-brand-brown-800 mb-2 font-display">
              Job Postings
            </h1>
            <p className="text-brand-brown-600">
              Manage career opportunities and applications
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-gradient-brown text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-brown"
          >
            <Plus className="h-5 w-5" />
            Post New Job
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-brown p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-brand-brown-600">Active Jobs</p>
                <p className="text-2xl font-bold text-brand-brown-800">
                  {jobs.filter((j) => j.status === "active").length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-brown p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-brand-brown-600">Total Applicants</p>
                <p className="text-2xl font-bold text-brand-brown-800">
                  {jobs.reduce((sum, job) => sum + job.applicants, 0)}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-brown p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <Clock className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-brand-brown-600">This Month</p>
                <p className="text-2xl font-bold text-brand-brown-800">2</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-brown p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-brand-brown-600">Closed</p>
                <p className="text-2xl font-bold text-brand-brown-800">
                  {jobs.filter((j) => j.status === "closed").length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl shadow-brown p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-brown-400" />
            <input
              type="text"
              placeholder="Search job postings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-brand-brown-200 rounded-lg focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-brown p-6 hover:shadow-brown-lg transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-brown flex items-center justify-center text-white flex-shrink-0">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-brand-brown-800">
                          {job.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            job.status === "active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {job.status}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-brand-brown-600">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1 text-primary font-medium">
                          <DollarSign className="h-4 w-4" />
                          {job.salary}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 mt-3 text-sm">
                        <span className="text-brand-brown-600">
                          <strong className="text-brand-brown-800">
                            {job.applicants}
                          </strong>{" "}
                          applicants
                        </span>
                        <span className="text-brand-brown-600">
                          Posted:{" "}
                          {new Date(job.postedDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex lg:flex-col gap-2">
                  <button
                    onClick={() => handleToggleStatus(job.id)}
                    className={`flex-1 lg:flex-none px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                      job.status === "active"
                        ? "bg-red-100 text-red-700 hover:bg-red-200"
                        : "bg-green-100 text-green-700 hover:bg-green-200"
                    }`}
                  >
                    {job.status === "active" ? "Close" : "Reopen"}
                  </button>
                  <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-sm">
                    <Edit className="h-4 w-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteJob(job.id)}
                    className="px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <div className="bg-white rounded-xl shadow-brown p-12 text-center">
            <Briefcase className="h-16 w-16 text-brand-brown-300 mx-auto mb-4" />
            <p className="text-brand-brown-600 mb-4">No job postings found</p>
            <button
              onClick={() => setShowAddModal(true)}
              className="text-primary font-semibold hover:underline"
            >
              Post your first job
            </button>
          </div>
        )}
      </div>

      {/* Add Job Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-brown-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-brand-brown-200 flex items-center justify-between sticky top-0 bg-white">
              <h2 className="text-2xl font-bold text-brand-brown-800">
                Post New Job
              </h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-brand-cream-100 rounded-lg transition-colors"
              >
                <X className="h-6 w-6 text-brand-brown-600" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  value={newJob.title}
                  onChange={(e) =>
                    setNewJob({ ...newJob, title: e.target.value })
                  }
                  placeholder="e.g., Master Tailor"
                  className="w-full px-4 py-2 border-2 border-brand-brown-200 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>

              {/* Department & Location */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                    Department *
                  </label>
                  <input
                    type="text"
                    value={newJob.department}
                    onChange={(e) =>
                      setNewJob({ ...newJob, department: e.target.value })
                    }
                    placeholder="e.g., Production"
                    className="w-full px-4 py-2 border-2 border-brand-brown-200 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    value={newJob.location}
                    onChange={(e) =>
                      setNewJob({ ...newJob, location: e.target.value })
                    }
                    placeholder="Abeokuta, Nigeria"
                    className="w-full px-4 py-2 border-2 border-brand-brown-200 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              {/* Type & Salary */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                    Job Type *
                  </label>
                  <select
                    value={newJob.type}
                    onChange={(e) =>
                      setNewJob({ ...newJob, type: e.target.value })
                    }
                    className="w-full px-4 py-2 border-2 border-brand-brown-200 rounded-lg focus:border-primary focus:outline-none"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                    Salary Range *
                  </label>
                  <input
                    type="text"
                    value={newJob.salary}
                    onChange={(e) =>
                      setNewJob({ ...newJob, salary: e.target.value })
                    }
                    placeholder="₦80,000 - ₦150,000/month"
                    className="w-full px-4 py-2 border-2 border-brand-brown-200 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                  Job Description *
                </label>
                <textarea
                  value={newJob.description}
                  onChange={(e) =>
                    setNewJob({ ...newJob, description: e.target.value })
                  }
                  rows={4}
                  placeholder="Describe the role and what makes it exciting..."
                  className="w-full px-4 py-2 border-2 border-brand-brown-200 rounded-lg focus:border-primary focus:outline-none resize-none"
                />
              </div>

              {/* Requirements */}
              <div>
                <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                  Requirements (one per line)
                </label>
                <textarea
                  value={newJob.requirements}
                  onChange={(e) =>
                    setNewJob({ ...newJob, requirements: e.target.value })
                  }
                  rows={5}
                  placeholder="Minimum 5 years of tailoring experience&#10;Expert knowledge of traditional Nigerian garment construction&#10;Proficiency with hand-sewing and machine techniques"
                  className="w-full px-4 py-2 border-2 border-brand-brown-200 rounded-lg focus:border-primary focus:outline-none resize-none"
                />
              </div>

              {/* Responsibilities */}
              <div>
                <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                  Responsibilities (one per line)
                </label>
                <textarea
                  value={newJob.responsibilities}
                  onChange={(e) =>
                    setNewJob({ ...newJob, responsibilities: e.target.value })
                  }
                  rows={5}
                  placeholder="Create custom kaftans, agbadas, and traditional wear&#10;Ensure all garments meet quality standards&#10;Train and mentor junior tailors"
                  className="w-full px-4 py-2 border-2 border-brand-brown-200 rounded-lg focus:border-primary focus:outline-none resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-6 py-3 border-2 border-brand-brown-300 text-brand-brown-700 rounded-lg hover:bg-brand-cream-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddJob}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-brown text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Save className="h-5 w-5" />
                  Publish Job
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
