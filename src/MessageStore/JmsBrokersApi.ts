/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JmsBrokers } from './JmsBrokers';
import { JmsBrokersRequestBuilder } from './JmsBrokersRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class JmsBrokersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JmsBrokers<DeSerializersT>, DeSerializersT>
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
  ): JmsBrokersApi<DeSerializersT> {
    return new JmsBrokersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = JmsBrokers;

  requestBuilder(): JmsBrokersRequestBuilder<DeSerializersT> {
    return new JmsBrokersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JmsBrokers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JmsBrokers<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<JmsBrokers<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof JmsBrokers, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(JmsBrokers, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    KEY: OrderableEdmTypeField<
      JmsBrokers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CAPACITY: OrderableEdmTypeField<
      JmsBrokers<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    MAX_CAPACITY: OrderableEdmTypeField<
      JmsBrokers<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    IS_TRANSACTED_SESSIONS_HIGH: OrderableEdmTypeField<
      JmsBrokers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    IS_CONSUMERS_HIGH: OrderableEdmTypeField<
      JmsBrokers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    IS_PRODUCERS_HIGH: OrderableEdmTypeField<
      JmsBrokers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    MAX_QUEUE_NUMBER: OrderableEdmTypeField<
      JmsBrokers<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    QUEUE_NUMBER: OrderableEdmTypeField<
      JmsBrokers<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    CAPACITY_OK: OrderableEdmTypeField<
      JmsBrokers<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    CAPACITY_WARNING: OrderableEdmTypeField<
      JmsBrokers<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    CAPACITY_ERROR: OrderableEdmTypeField<
      JmsBrokers<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    ALL_FIELDS: AllFields<JmsBrokers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link key} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY: fieldBuilder.buildEdmTypeField('Key', 'Edm.String', false),
        /**
         * Static representation of the {@link capacity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPACITY: fieldBuilder.buildEdmTypeField('Capacity', 'Edm.Int64', true),
        /**
         * Static representation of the {@link maxCapacity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_CAPACITY: fieldBuilder.buildEdmTypeField(
          'MaxCapacity',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link isTransactedSessionsHigh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TRANSACTED_SESSIONS_HIGH: fieldBuilder.buildEdmTypeField(
          'IsTransactedSessionsHigh',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link isConsumersHigh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CONSUMERS_HIGH: fieldBuilder.buildEdmTypeField(
          'IsConsumersHigh',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link isProducersHigh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCERS_HIGH: fieldBuilder.buildEdmTypeField(
          'IsProducersHigh',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link maxQueueNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_QUEUE_NUMBER: fieldBuilder.buildEdmTypeField(
          'MaxQueueNumber',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link queueNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUEUE_NUMBER: fieldBuilder.buildEdmTypeField(
          'QueueNumber',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link capacityOk} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPACITY_OK: fieldBuilder.buildEdmTypeField(
          'CapacityOk',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link capacityWarning} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPACITY_WARNING: fieldBuilder.buildEdmTypeField(
          'CapacityWarning',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link capacityError} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPACITY_ERROR: fieldBuilder.buildEdmTypeField(
          'CapacityError',
          'Edm.Int64',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JmsBrokers)
      };
    }

    return this._schema;
  }
}
