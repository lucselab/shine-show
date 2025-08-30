import React, { useState } from 'react';
import { Plus, Trash2, ExternalLink, Github, Star } from 'lucide-react';
import { Project } from '../../types/portfolio';

interface ProjectsEditorProps {
  projects: Project[];
  onUpdate: (projects: Project[]) => void;
}

export const ProjectsEditor: React.FC<ProjectsEditorProps> = ({
  projects,
  onUpdate
}) => {
  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: '',
      description: '',
      technologies: [''],
      liveUrl: '',
      githubUrl: '',
      imageUrl: '',
      featured: false
    };
    onUpdate([...projects, newProject]);
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    onUpdate(projects.map(project => 
      project.id === id ? { ...project, ...updates } : project
    ));
  };

  const removeProject = (id: string) => {
    onUpdate(projects.filter(project => project.id !== id));
  };

  const addTechnology = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      updateProject(projectId, {
        technologies: [...project.technologies, '']
      });
    }
  };

  const updateTechnology = (projectId: string, index: number, value: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      const newTechnologies = [...project.technologies];
      newTechnologies[index] = value;
      updateProject(projectId, { technologies: newTechnologies });
    }
  };

  const removeTechnology = (projectId: string, index: number) => {
    const project = projects.find(p => p.id === projectId);
    if (project && project.technologies.length > 1) {
      const newTechnologies = project.technologies.filter((_, i) => i !== index);
      updateProject(projectId, { technologies: newTechnologies });
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Projects</h2>
        <button
          onClick={addProject}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Plus className="w-4 h-4" />
          <span>Add Project</span>
        </button>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-50 p-4 rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ExternalLink className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">
                  {project.title || 'New Project'}
                </span>
                {project.featured && (
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                )}
              </div>
              <button
                onClick={() => removeProject(project.id)}
                className="text-red-600 hover:text-red-800 transition-colors duration-200"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) => updateProject(project.id, { title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={project.description}
                  onChange={(e) => updateProject(project.id, { description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your project and its impact..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Live URL
                  </label>
                  <input
                    type="url"
                    value={project.liveUrl}
                    onChange={(e) => updateProject(project.id, { liveUrl: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    GitHub URL
                  </label>
                  <input
                    type="url"
                    value={project.githubUrl}
                    onChange={(e) => updateProject(project.id, { githubUrl: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Image URL
                </label>
                <input
                  type="url"
                  value={project.imageUrl}
                  onChange={(e) => updateProject(project.id, { imageUrl: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/project-screenshot.jpg"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Technologies Used
                  </label>
                  <button
                    onClick={() => addTechnology(project.id)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    + Add Technology
                  </button>
                </div>
                
                <div className="space-y-2">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={tech}
                        onChange={(e) => updateTechnology(project.id, index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Technology name..."
                      />
                      {project.technologies.length > 1 && (
                        <button
                          onClick={() => removeTechnology(project.id, index)}
                          className="text-red-600 hover:text-red-800 transition-colors duration-200"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={project.featured}
                  onChange={(e) => updateProject(project.id, { featured: e.target.checked })}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label className="text-sm text-gray-700">Feature this project</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};