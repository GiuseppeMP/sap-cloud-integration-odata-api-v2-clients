/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessageProcessingLogRuns } from './MessageProcessingLogRuns';
import { MessageProcessingLogRunsRequestBuilder } from './MessageProcessingLogRunsRequestBuilder';
import { MessageProcessingLogRunStepsApi } from './MessageProcessingLogRunStepsApi';
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
export class MessageProcessingLogRunsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MessageProcessingLogRuns<DeSerializersT>, DeSerializersT>
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
  ): MessageProcessingLogRunsApi<DeSerializersT> {
    return new MessageProcessingLogRunsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link runSteps} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RUN_STEPS: Link<
      MessageProcessingLogRuns<DeSerializersT>,
      DeSerializersT,
      MessageProcessingLogRunStepsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [MessageProcessingLogRunStepsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RUN_STEPS: new Link('RunSteps', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = MessageProcessingLogRuns;

  requestBuilder(): MessageProcessingLogRunsRequestBuilder<DeSerializersT> {
    return new MessageProcessingLogRunsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MessageProcessingLogRuns<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MessageProcessingLogRuns<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MessageProcessingLogRuns<DeSerializersT>,
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
    typeof MessageProcessingLogRuns,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MessageProcessingLogRuns,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      MessageProcessingLogRuns<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RUN_START: OrderableEdmTypeField<
      MessageProcessingLogRuns<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    RUN_STOP: OrderableEdmTypeField<
      MessageProcessingLogRuns<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LOG_LEVEL: OrderableEdmTypeField<
      MessageProcessingLogRuns<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERALL_STATE: OrderableEdmTypeField<
      MessageProcessingLogRuns<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESS_ID: OrderableEdmTypeField<
      MessageProcessingLogRuns<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link runSteps} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RUN_STEPS: Link<
      MessageProcessingLogRuns<DeSerializersT>,
      DeSerializersT,
      MessageProcessingLogRunStepsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MessageProcessingLogRuns<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.String', false),
        /**
         * Static representation of the {@link runStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RUN_START: fieldBuilder.buildEdmTypeField(
          'RunStart',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link runStop} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RUN_STOP: fieldBuilder.buildEdmTypeField(
          'RunStop',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link logLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG_LEVEL: fieldBuilder.buildEdmTypeField(
          'LogLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overallState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERALL_STATE: fieldBuilder.buildEdmTypeField(
          'OverallState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link processId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_ID: fieldBuilder.buildEdmTypeField(
          'ProcessId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MessageProcessingLogRuns)
      };
    }

    return this._schema;
  }
}
