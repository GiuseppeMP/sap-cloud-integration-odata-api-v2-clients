/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessageProcessingLogRunSteps } from './MessageProcessingLogRunSteps';
import { MessageProcessingLogRunStepsRequestBuilder } from './MessageProcessingLogRunStepsRequestBuilder';
import { MessageProcessingLogRunStepPropertiesApi } from './MessageProcessingLogRunStepPropertiesApi';
import { TraceMessagesApi } from './TraceMessagesApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class MessageProcessingLogRunStepsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MessageProcessingLogRunSteps<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): MessageProcessingLogRunStepsApi<DeSerializersT> {
    return new MessageProcessingLogRunStepsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link runStepProperties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RUN_STEP_PROPERTIES: Link<
      MessageProcessingLogRunSteps<DeSerializersT>,
      DeSerializersT,
      MessageProcessingLogRunStepPropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link traceMessages} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRACE_MESSAGES: Link<
      MessageProcessingLogRunSteps<DeSerializersT>,
      DeSerializersT,
      TraceMessagesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MessageProcessingLogRunStepPropertiesApi<DeSerializersT>,
      TraceMessagesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RUN_STEP_PROPERTIES: new Link('RunStepProperties', this, linkedApis[0]),
      TRACE_MESSAGES: new Link('TraceMessages', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = MessageProcessingLogRunSteps;

  requestBuilder(): MessageProcessingLogRunStepsRequestBuilder<DeSerializersT> {
    return new MessageProcessingLogRunStepsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MessageProcessingLogRunSteps<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MessageProcessingLogRunSteps<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MessageProcessingLogRunSteps<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof MessageProcessingLogRunSteps,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MessageProcessingLogRunSteps,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RUN_ID: OrderableEdmTypeField<
      MessageProcessingLogRunSteps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHILD_COUNT: OrderableEdmTypeField<
      MessageProcessingLogRunSteps<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STEP_START: OrderableEdmTypeField<
      MessageProcessingLogRunSteps<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    STEP_STOP: OrderableEdmTypeField<
      MessageProcessingLogRunSteps<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    STEP_ID: OrderableEdmTypeField<
      MessageProcessingLogRunSteps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODEL_STEP_ID: OrderableEdmTypeField<
      MessageProcessingLogRunSteps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRANCH_ID: OrderableEdmTypeField<
      MessageProcessingLogRunSteps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      MessageProcessingLogRunSteps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ERROR: OrderableEdmTypeField<
      MessageProcessingLogRunSteps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY: OrderableEdmTypeField<
      MessageProcessingLogRunSteps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link runStepProperties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RUN_STEP_PROPERTIES: Link<
      MessageProcessingLogRunSteps<DeSerializersT>,
      DeSerializersT,
      MessageProcessingLogRunStepPropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link traceMessages} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRACE_MESSAGES: Link<
      MessageProcessingLogRunSteps<DeSerializersT>,
      DeSerializersT,
      TraceMessagesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MessageProcessingLogRunSteps<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link runId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RUN_ID: fieldBuilder.buildEdmTypeField('RunId', 'Edm.String', false),
        /**
         * Static representation of the {@link childCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHILD_COUNT: fieldBuilder.buildEdmTypeField(
          'ChildCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link stepStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STEP_START: fieldBuilder.buildEdmTypeField(
          'StepStart',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link stepStop} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STEP_STOP: fieldBuilder.buildEdmTypeField(
          'StepStop',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link stepId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STEP_ID: fieldBuilder.buildEdmTypeField('StepId', 'Edm.String', true),
        /**
         * Static representation of the {@link modelStepId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_STEP_ID: fieldBuilder.buildEdmTypeField(
          'ModelStepId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link branchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRANCH_ID: fieldBuilder.buildEdmTypeField(
          'BranchId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.String', true),
        /**
         * Static representation of the {@link error} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR: fieldBuilder.buildEdmTypeField('Error', 'Edm.String', true),
        /**
         * Static representation of the {@link activity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY: fieldBuilder.buildEdmTypeField(
          'Activity',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MessageProcessingLogRunSteps)
      };
    }

    return this._schema;
  }
}
