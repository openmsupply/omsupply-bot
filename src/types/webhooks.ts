import {
  WebhookPayloadIssues,
  WebhookPayloadLabel,
  PayloadRepository,
  WebhookPayloadPullRequest,
  WebhookPayloadProjectCard,
  WebhookPayloadRelease,
} from '@octokit/webhooks';
import { Issue, Label, PullRequest, Card, Release } from './github';

export type IssuePayload = WebhookPayloadIssues & { issue: Issue };
export type LabelPayload = WebhookPayloadLabel & { label: Label };
export type RepositoryPayload = PayloadRepository;
export type IssueLabelPayload = IssuePayload & LabelPayload;
export type PullRequestPayload = WebhookPayloadPullRequest & { pull_request: PullRequest };
export type ProjectCardPayload = WebhookPayloadProjectCard & { project_card: Card };
export type ReleasePayload = WebhookPayloadRelease & { release: Release };