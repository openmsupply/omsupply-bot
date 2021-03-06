import { Application } from 'probot';
import { issue, pullRequest, projectCard, release } from './events';

const events = {
  issueAssigned: 'issues.assigned',
  issueLabelled: 'issues.labeled',
  pullRequestOpened: ['pull_request.opened', 'pull_request.reopened'],
  releaseCreated: ['release.created', 'release.edited'],
  projectCardMoved: 'project_card.moved',
};

export = (app: Application) => {
  app.on(events.issueAssigned, issue.assigned);
  app.on(events.issueLabelled, issue.labelled);
  app.on(events.pullRequestOpened, pullRequest.opened);
  app.on(events.releaseCreated, release.created);
  app.on(events.projectCardMoved, projectCard.moved);
};
