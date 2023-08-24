import React from "react";
import "../experience/experience.css";

const Experience = () => {
  return (
    <div id="experience__block">
      <h2 className="ex__block_title">Professional Experience</h2>
      <div id="desc">
        <div id="first">
          <div>
            <div class="experience__block_first">
              <p>
                <strong>Organization:</strong>Unison Group
              </p>
              <p>
                <strong>Position:</strong> Project Manager
              </p>
              <p>
                <strong>Date:</strong> September 2021 - to date
              </p>
            </div>

            <div className="experience__block_first">
              <p>
                <strong>Organization:</strong> Beyond Investment Group{" "}
              </p>
              <p>
                <strong>Position:</strong> Business-Analyst
              </p>
              <p>
                <strong>Date:</strong>February-June 2021
              </p>
            </div>

            <div className="experience__block_first">
              <p>
                <strong>Organization:</strong> Blume 2000 (Germany)
              </p>
              <p>
                <strong>Position:</strong> Sales Person
              </p>
              <p>
                <strong>Date:</strong> June-September 2018
              </p>
            </div>
          </div>
        </div>

        <div id="second">
          <div>
            <div class="experience__block_first">
              <p>
                <strong>Project:</strong> “Enhancing Migrants’ Awareness on Air
                Pollution and Moving Towards a "Healthy City Vision" in Bishkek”
              </p>
              <p>
                <strong>Position:</strong> Program Coordinator
              </p>
              <p>
                <strong>Date:</strong> April 2022 - to date
              </p>
              <ul>
                <li>
                  Planning and managing project implementation to make progress
                  towards the achievement of key project milestones
                </li>
                <li>
                  Сommunicating with government agencies and private companies,
                  donor on issues related to project implementation and
                  coordinating joint activities
                </li>
                <li>
                  Organising information sessions on air pollution for 1350
                  people in 50 new settlements around Bishkek city • Planning
                  and controling the project budget according to the donor's
                  financial and grant requirements and the organisation's
                  internal procedures;
                </li>
                <li>
                  Developing and creating necessary project documents, work
                  plans, letters, invitations and other administrative
                  processes;
                </li>
                <li>
                  Ensuring transparency of project activities through
                  collection, storage and submission of all financial documents
                  according to donor requirements and internal procedures of the
                  organisation;
                </li>
              </ul>
            </div>

            <div className="experience__block_first">
              <p>
                <strong>Project:</strong> Developing a national position on
                climate change on behalf of civil society and youth on COY17,
                COP27
              </p>
              <p>
                <strong>Position:</strong> Program Coordinator
              </p>
              <p>
                <strong>Date:</strong>September-December 2022
              </p>
              <ul>
                <li>
                  Developing project plans in line with project requirements.
                  Overseeing project implementation to achieve key milestones.
                </li>
                <li>
                  Coordinating with government agencies, private companies, and
                  donors for project-related matters.
                </li>
                <li>
                  Managing the project budget according to donor and
                  organizational guidelines.
                </li>
                <li>
                  Creating necessary project documentation and administrative
                  materials.
                </li>
                <li>
                  Ensuring transparency of project activities through
                  collection, storage and submission of all financial documents
                  according to donor requirements and internal procedures of the
                  organisation;
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
