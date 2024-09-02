/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AlternativePartners } from './AlternativePartners';
import { AlternativePartnersRequestBuilder } from './AlternativePartnersRequestBuilder';
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
export class AlternativePartnersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AlternativePartners<DeSerializersT>, DeSerializersT>
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
  ): AlternativePartnersApi<DeSerializersT> {
    return new AlternativePartnersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AlternativePartners;

  requestBuilder(): AlternativePartnersRequestBuilder<DeSerializersT> {
    return new AlternativePartnersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AlternativePartners<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AlternativePartners<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AlternativePartners<DeSerializersT>,
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
    typeof AlternativePartners,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AlternativePartners,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    HEXAGENCY: OrderableEdmTypeField<
      AlternativePartners<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEXSCHEME: OrderableEdmTypeField<
      AlternativePartners<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEXID: OrderableEdmTypeField<
      AlternativePartners<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGENCY: OrderableEdmTypeField<
      AlternativePartners<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCHEME: OrderableEdmTypeField<
      AlternativePartners<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ID: OrderableEdmTypeField<
      AlternativePartners<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PID: OrderableEdmTypeField<
      AlternativePartners<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      AlternativePartners<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_TIME: OrderableEdmTypeField<
      AlternativePartners<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      AlternativePartners<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_TIME: OrderableEdmTypeField<
      AlternativePartners<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ALL_FIELDS: AllFields<AlternativePartners<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link hexagency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEXAGENCY: fieldBuilder.buildEdmTypeField(
          'Hexagency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link hexscheme} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEXSCHEME: fieldBuilder.buildEdmTypeField(
          'Hexscheme',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link hexid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEXID: fieldBuilder.buildEdmTypeField('Hexid', 'Edm.String', false),
        /**
         * Static representation of the {@link agency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGENCY: fieldBuilder.buildEdmTypeField('Agency', 'Edm.String', false),
        /**
         * Static representation of the {@link scheme} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEME: fieldBuilder.buildEdmTypeField('Scheme', 'Edm.String', false),
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.String', false),
        /**
         * Static representation of the {@link pid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PID: fieldBuilder.buildEdmTypeField('Pid', 'Edm.String', false),
        /**
         * Static representation of the {@link lastModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'LastModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_TIME: fieldBuilder.buildEdmTypeField(
          'LastModifiedTime',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link createdBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY: fieldBuilder.buildEdmTypeField(
          'CreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_TIME: fieldBuilder.buildEdmTypeField(
          'CreatedTime',
          'Edm.DateTime',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AlternativePartners)
      };
    }

    return this._schema;
  }
}
