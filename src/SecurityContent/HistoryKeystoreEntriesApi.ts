/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HistoryKeystoreEntries } from './HistoryKeystoreEntries';
import { HistoryKeystoreEntriesRequestBuilder } from './HistoryKeystoreEntriesRequestBuilder';
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
export class HistoryKeystoreEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<HistoryKeystoreEntries<DeSerializersT>, DeSerializersT>
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
  ): HistoryKeystoreEntriesApi<DeSerializersT> {
    return new HistoryKeystoreEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = HistoryKeystoreEntries;

  requestBuilder(): HistoryKeystoreEntriesRequestBuilder<DeSerializersT> {
    return new HistoryKeystoreEntriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    HistoryKeystoreEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      HistoryKeystoreEntries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    HistoryKeystoreEntries<DeSerializersT>,
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
    typeof HistoryKeystoreEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        HistoryKeystoreEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACTIVATED_BY: OrderableEdmTypeField<
      HistoryKeystoreEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE_FROM: OrderableEdmTypeField<
      HistoryKeystoreEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DEACTIVATED_BY: OrderableEdmTypeField<
      HistoryKeystoreEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE_UNTIL: OrderableEdmTypeField<
      HistoryKeystoreEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ACTIVATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      HistoryKeystoreEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ORIGINAL_ALIAS: OrderableEdmTypeField<
      HistoryKeystoreEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<HistoryKeystoreEntries<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link activatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVATED_BY: fieldBuilder.buildEdmTypeField(
          'ActivatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activeFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_FROM: fieldBuilder.buildEdmTypeField(
          'ActiveFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link deactivatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEACTIVATED_BY: fieldBuilder.buildEdmTypeField(
          'DeactivatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activeUntil} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_UNTIL: fieldBuilder.buildEdmTypeField(
          'ActiveUntil',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link activationSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVATION_SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivationSequenceNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link originalAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_ALIAS: fieldBuilder.buildEdmTypeField(
          'OriginalAlias',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', HistoryKeystoreEntries)
      };
    }

    return this._schema;
  }
}
