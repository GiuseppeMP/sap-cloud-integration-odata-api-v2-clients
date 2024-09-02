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
import type { MessageProcessingLogRunStepsApi } from './MessageProcessingLogRunStepsApi';
import {
  MessageProcessingLogRunStepProperties,
  MessageProcessingLogRunStepPropertiesType
} from './MessageProcessingLogRunStepProperties';
import { TraceMessages, TraceMessagesType } from './TraceMessages';

/**
 * This class represents the entity "MessageProcessingLogRunSteps" of service "com.sap.hci.api".
 */
export class MessageProcessingLogRunSteps<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MessageProcessingLogRunStepsType<T>
{
  /**
   * Technical entity name for MessageProcessingLogRunSteps.
   */
  static override _entityName = 'MessageProcessingLogRunSteps';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MessageProcessingLogRunSteps entity.
   */
  static _keys = ['RunId', 'ChildCount'];
  /**
   * Run Id.
   */
  declare runId: DeserializedType<T, 'Edm.String'>;
  /**
   * Child Count.
   */
  declare childCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Step Start.
   * @nullable
   */
  declare stepStart?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Step Stop.
   * @nullable
   */
  declare stepStop?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Step Id.
   * @nullable
   */
  declare stepId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Model Step Id.
   * @nullable
   */
  declare modelStepId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Branch Id.
   * @nullable
   */
  declare branchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Error.
   * @nullable
   */
  declare error?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity.
   * @nullable
   */
  declare activity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link MessageProcessingLogRunStepProperties} entity.
   */
  declare runStepProperties: MessageProcessingLogRunStepProperties<T>[];
  /**
   * One-to-many navigation property to the {@link TraceMessages} entity.
   */
  declare traceMessages: TraceMessages<T>[];

  constructor(_entityApi: MessageProcessingLogRunStepsApi<T>) {
    super(_entityApi);
  }
}

export interface MessageProcessingLogRunStepsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  runId: DeserializedType<T, 'Edm.String'>;
  childCount: DeserializedType<T, 'Edm.Int32'>;
  stepStart?: DeserializedType<T, 'Edm.DateTime'> | null;
  stepStop?: DeserializedType<T, 'Edm.DateTime'> | null;
  stepId?: DeserializedType<T, 'Edm.String'> | null;
  modelStepId?: DeserializedType<T, 'Edm.String'> | null;
  branchId?: DeserializedType<T, 'Edm.String'> | null;
  status?: DeserializedType<T, 'Edm.String'> | null;
  error?: DeserializedType<T, 'Edm.String'> | null;
  activity?: DeserializedType<T, 'Edm.String'> | null;
  runStepProperties: MessageProcessingLogRunStepPropertiesType<T>[];
  traceMessages: TraceMessagesType<T>[];
}
