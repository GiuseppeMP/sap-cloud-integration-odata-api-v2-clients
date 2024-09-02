/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import {
  IntegrationArtifact,
  IntegrationArtifactField
} from './IntegrationArtifact';
import type { MessageProcessingLogsApi } from './MessageProcessingLogsApi';
import {
  MessageProcessingLogCustomHeaderProperties,
  MessageProcessingLogCustomHeaderPropertiesType
} from './MessageProcessingLogCustomHeaderProperties';
import {
  MessageStoreEntries,
  MessageStoreEntriesType
} from './MessageStoreEntries';
import {
  MessageProcessingLogErrorInformations,
  MessageProcessingLogErrorInformationsType
} from './MessageProcessingLogErrorInformations';
import {
  MessageProcessingLogAdapterAttributes,
  MessageProcessingLogAdapterAttributesType
} from './MessageProcessingLogAdapterAttributes';
import {
  MessageProcessingLogAttachments,
  MessageProcessingLogAttachmentsType
} from './MessageProcessingLogAttachments';
import {
  MessageProcessingLogRuns,
  MessageProcessingLogRunsType
} from './MessageProcessingLogRuns';

/**
 * This class represents the entity "MessageProcessingLogs" of service "com.sap.hci.api".
 */
export class MessageProcessingLogs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MessageProcessingLogsType<T>
{
  /**
   * Technical entity name for MessageProcessingLogs.
   */
  static override _entityName = 'MessageProcessingLogs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MessageProcessingLogs entity.
   */
  static _keys = ['MessageGuid'];
  /**
   * Message Guid.
   */
  declare messageGuid: DeserializedType<T, 'Edm.String'>;
  /**
   * Correlation Id.
   * @nullable
   */
  declare correlationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Application Message Id.
   * @nullable
   */
  declare applicationMessageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Application Message Type.
   * @nullable
   */
  declare applicationMessageType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Log Start.
   * @nullable
   */
  declare logStart?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Log End.
   * @nullable
   */
  declare logEnd?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Sender.
   * @nullable
   */
  declare sender?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver.
   * @nullable
   */
  declare receiver?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Integration Flow Name.
   * @nullable
   */
  declare integrationFlowName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternate Web Link.
   * @nullable
   */
  declare alternateWebLink?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Integration Artifact.
   */
  declare integrationArtifact: IntegrationArtifact<T>;
  /**
   * Log Level.
   * @nullable
   */
  declare logLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Custom Status.
   * @nullable
   */
  declare customStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Id.
   * @nullable
   */
  declare transactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Previous Component Name.
   * @nullable
   */
  declare previousComponentName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Local Component Name.
   * @nullable
   */
  declare localComponentName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin Component Name.
   * @nullable
   */
  declare originComponentName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link MessageProcessingLogCustomHeaderProperties} entity.
   */
  declare customHeaderProperties: MessageProcessingLogCustomHeaderProperties<T>[];
  /**
   * One-to-many navigation property to the {@link MessageStoreEntries} entity.
   */
  declare messageStoreEntries: MessageStoreEntries<T>[];
  /**
   * One-to-one navigation property to the {@link MessageProcessingLogErrorInformations} entity.
   */
  declare errorInformation?: MessageProcessingLogErrorInformations<T> | null;
  /**
   * One-to-many navigation property to the {@link MessageProcessingLogAdapterAttributes} entity.
   */
  declare adapterAttributes: MessageProcessingLogAdapterAttributes<T>[];
  /**
   * One-to-many navigation property to the {@link MessageProcessingLogAttachments} entity.
   */
  declare attachments: MessageProcessingLogAttachments<T>[];
  /**
   * One-to-many navigation property to the {@link MessageProcessingLogRuns} entity.
   */
  declare runs: MessageProcessingLogRuns<T>[];

  constructor(_entityApi: MessageProcessingLogsApi<T>) {
    super(_entityApi);
  }
}

export interface MessageProcessingLogsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  messageGuid: DeserializedType<T, 'Edm.String'>;
  correlationId?: DeserializedType<T, 'Edm.String'> | null;
  applicationMessageId?: DeserializedType<T, 'Edm.String'> | null;
  applicationMessageType?: DeserializedType<T, 'Edm.String'> | null;
  logStart?: DeserializedType<T, 'Edm.DateTime'> | null;
  logEnd?: DeserializedType<T, 'Edm.DateTime'> | null;
  sender?: DeserializedType<T, 'Edm.String'> | null;
  receiver?: DeserializedType<T, 'Edm.String'> | null;
  integrationFlowName?: DeserializedType<T, 'Edm.String'> | null;
  status?: DeserializedType<T, 'Edm.String'> | null;
  alternateWebLink?: DeserializedType<T, 'Edm.String'> | null;
  integrationArtifact: IntegrationArtifact<T>;
  logLevel?: DeserializedType<T, 'Edm.String'> | null;
  customStatus?: DeserializedType<T, 'Edm.String'> | null;
  transactionId?: DeserializedType<T, 'Edm.String'> | null;
  previousComponentName?: DeserializedType<T, 'Edm.String'> | null;
  localComponentName?: DeserializedType<T, 'Edm.String'> | null;
  originComponentName?: DeserializedType<T, 'Edm.String'> | null;
  customHeaderProperties: MessageProcessingLogCustomHeaderPropertiesType<T>[];
  messageStoreEntries: MessageStoreEntriesType<T>[];
  errorInformation?: MessageProcessingLogErrorInformationsType<T> | null;
  adapterAttributes: MessageProcessingLogAdapterAttributesType<T>[];
  attachments: MessageProcessingLogAttachmentsType<T>[];
  runs: MessageProcessingLogRunsType<T>[];
}
